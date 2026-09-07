namespace backend.Features.Auth.Services;

public interface IOtpService
{
    Task<string> GenerateAndSaveOtpAsync(string phone);

    Task<bool> VerifyOtpAsync(string phone, string otp);
}