namespace backend.Features.Auth.DTOs;

public class CurrentUserResponse
{
    public Guid UserId { get; set; }

    public string Email { get; set; } = string.Empty;

    public string Role { get; set; } = string.Empty;

    public string? MemberName { get; set; }
}