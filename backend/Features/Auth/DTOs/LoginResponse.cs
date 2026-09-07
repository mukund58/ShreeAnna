namespace backend.Features.Auth.DTOs;

public class LoginResponse
{
    public string AccessToken { get; set; } = string.Empty;

    public DateTime ExpiresAt { get; set; }

    public Guid UserId { get; set; }

    public string Email { get; set; } = string.Empty;

    public string Role { get; set; } = string.Empty;

    public string? MemberName { get; set; }
}