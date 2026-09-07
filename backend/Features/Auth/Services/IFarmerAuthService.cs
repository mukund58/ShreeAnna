using backend.Features.Auth.DTOs;

namespace backend.Features.Auth.Services;

public interface IFarmerAuthService
{
    Task<bool> SendOtpAsync(string phone);

    Task<LoginResponse?> VerifyOtpAsync(
        string phone,
        string otp);
}