using System.ComponentModel.DataAnnotations;

namespace backend.Features.Auth.DTOs;

public class SendOtpRequest
{
    [Required]
    [Phone]
    public string Phone { get; set; } = string.Empty;
}