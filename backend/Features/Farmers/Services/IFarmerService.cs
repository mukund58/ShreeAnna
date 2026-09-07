namespace backend.Features.Farmers.Services;
using backend.Features.Farmers.DTOs;


public interface IFarmerService
{
    Task<FarmerResponse> CreateAsync(CreateFarmerRequest request);

    Task<List<FarmerResponse>> GetAllAsync();

    Task<FarmerResponse?> GetByIdAsync(Guid id);

    Task<FarmerResponse?> UpdateAsync(
        Guid id,
        UpdateFarmerRequest request);

    Task<bool> ChangeStatusAsync(
        Guid id,
        string status);
}