namespace backend.Features.Farmers.Entities;
using backend.Features.Farms.Entities;

public class Farmer
{
    public Guid Id { get; set; }

    public string FarmerCode { get; set; } = string.Empty;

    public string FullName { get; set; } = string.Empty;

    public string Phone { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public string Address { get; set; } = string.Empty;

    public string District { get; set; } = string.Empty;

    public string Taluka { get; set; } = string.Empty;

    public string Village { get; set; } = string.Empty;

    public DateTime DateOfBirth { get; set; }

    public string Status { get; set; } = "Active";

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public ICollection<Farm> Farms { get; set; } = new List<Farm>();
}