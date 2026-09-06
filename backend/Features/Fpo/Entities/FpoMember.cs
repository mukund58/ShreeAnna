namespace backend.Features.Fpo.Entities;
using backend.Features.Auth.Entities;
public class FpoMember
{
    public Guid Id { get; set; }

    public string EmployeeCode { get; set; } = string.Empty;

    public string Name { get; set; } = string.Empty;

    public string Role { get; set; } = string.Empty;

    public string Department { get; set; } = string.Empty;

    public string Phone { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public string Location { get; set; } = string.Empty;

    public string AssignedArea { get; set; } = string.Empty;

    public DateTime JoinedDate { get; set; }

    public string Status { get; set; } = "Active";

    public User? User { get; set; }
}