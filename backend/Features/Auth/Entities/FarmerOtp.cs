namespace backend.Features.Auth.Entities;

public class FarmerOtp
{
    public Guid Id { get; set; }

    public string Phone { get; set; } = string.Empty;

    public string OtpHash { get; set; } = string.Empty;

    public DateTime ExpiresAt { get; set; }

    public bool IsUsed { get; set; }

    public int Attempts { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}