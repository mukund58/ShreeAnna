using backend.Data;
using backend.Features.Auth.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
namespace backend.Features.Auth.Services;

public class OtpService : IOtpService
{
    private readonly ILogger<OtpService> _logger;
    private readonly AppDbContext _context;

    public OtpService(AppDbContext context, ILogger<OtpService> logger)
    {
        _context = context;
        _logger = logger;
    }

    public async Task<string> GenerateAndSaveOtpAsync(string phone)
    {
        phone = NormalizePhone(phone);

        // Invalidate previous unused OTPs
        var previousOtps = await _context.FarmerOtps
            .Where(x => x.Phone == phone && !x.IsUsed)
            .ToListAsync();

        foreach (var previousOtp in previousOtps)
        {
            previousOtp.IsUsed = true;
        }

        // Generate 6-digit OTP
        var otp = Random.Shared.Next(100000, 1000000)
            .ToString();

        _logger.LogInformation(
            "Development OTP for {Phone}: {Otp}",
            phone,
            otp);

        var otpHash = BCrypt.Net.BCrypt.HashPassword(otp);

        var farmerOtp = new FarmerOtp
        {
            Id = Guid.NewGuid(),
            Phone = phone,
            OtpHash = otpHash,
            ExpiresAt = DateTime.UtcNow.AddMinutes(5),
            IsUsed = false,
            Attempts = 0,
            CreatedAt = DateTime.UtcNow
        };

        await _context.FarmerOtps.AddAsync(farmerOtp);

        await _context.SaveChangesAsync();

        return otp;
    }

    public async Task<bool> VerifyOtpAsync(
        string phone,
        string otp)
    {
        phone = NormalizePhone(phone);

        var farmerOtp = await _context.FarmerOtps
            .Where(x =>
                x.Phone == phone &&
                !x.IsUsed)
            .OrderByDescending(x => x.CreatedAt)
            .FirstOrDefaultAsync();

        if (farmerOtp is null)
        {
            return false;
        }

        // OTP expired
        if (farmerOtp.ExpiresAt < DateTime.UtcNow)
        {
            farmerOtp.IsUsed = true;

            await _context.SaveChangesAsync();

            return false;
        }

        // Too many attempts
        if (farmerOtp.Attempts >= 5)
        {
            farmerOtp.IsUsed = true;

            await _context.SaveChangesAsync();

            return false;
        }

        farmerOtp.Attempts++;

        var isValid = BCrypt.Net.BCrypt.Verify(
            otp,
            farmerOtp.OtpHash);

        if (!isValid)
        {
            await _context.SaveChangesAsync();

            return false;
        }

        farmerOtp.IsUsed = true;

        await _context.SaveChangesAsync();

        return true;
    }

    private static string NormalizePhone(string phone)
    {
        return phone.Trim();
    }
}