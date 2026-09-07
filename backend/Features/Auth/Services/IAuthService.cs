using backend.Features.Auth.DTOs;

namespace backend.Features.Auth.Services;

public interface IAuthService
{
    Task<LoginResponse?> LoginAsync(LoginRequest request);

    CurrentUserResponse? GetCurrentUser();
}