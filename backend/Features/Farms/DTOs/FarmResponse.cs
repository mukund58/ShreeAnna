namespace backend.Features.Farms.DTOs;

public class FarmResponse
{
    public Guid Id { get; set; }

    public string FarmCode { get; set; } = string.Empty;

    public Guid FarmerId { get; set; }

    public string FarmName { get; set; } = string.Empty;

    public decimal AreaInAcres { get; set; }

    public string MilletType { get; set; } = string.Empty;

    public string SoilType { get; set; } = string.Empty;

    public string SurveyNumber { get; set; } = string.Empty;

    public string District { get; set; } = string.Empty;

    public string Taluka { get; set; } = string.Empty;

    public string Village { get; set; } = string.Empty;

    public decimal Latitude { get; set; }

    public decimal Longitude { get; set; }

    public string ImageUrl { get; set; } = string.Empty;

    public string Status { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; }

    public DateTime? VerifiedAt { get; set; }

    public Guid? VerifiedBy { get; set; }
}