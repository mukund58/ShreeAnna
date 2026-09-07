using System.ComponentModel.DataAnnotations;

namespace backend.Features.Auth.DTOs;

public class VerifyOtpRequest
{
    [Required]
    [Phone]
    public string Phone { get; set; } = string.Empty;

    [Required]
    [StringLength(6, MinimumLength = 6)]
    public string Otp { get; set; } = string.Empty;
}