using System.Security.Claims;
using backend.Data;
using backend.Features.Auth;
using backend.Features.Farms.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Features.Farmers.Controllers;

[ApiController]
[Route("api/farmers/{farmerId:guid}/farms")]
[Authorize(Roles = Roles.Farmer)]
public class FarmerFarmsController : ControllerBase
{
    private readonly AppDbContext _context;

    public FarmerFarmsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<FarmResponse>>> GetMyFarms(Guid farmerId)
    {
        var userIdClaim = User.FindFirstValue(ClaimTypes.NameIdentifier);

        if (!Guid.TryParse(userIdClaim, out var userId) || userId != farmerId)
        {
            return Forbid();
        }

        var farms = await _context.Farms
            .AsNoTracking()
            .Where(f => f.FarmerId == farmerId)
            .OrderByDescending(f => f.CreatedAt)
            .Select(f => new FarmResponse
            {
                Id = f.Id,
                FarmCode = f.FarmCode,
                FarmerId = f.FarmerId,
                FarmName = f.FarmName,
                AreaInAcres = f.AreaInAcres,
                MilletType = f.MilletType,
                SoilType = f.SoilType,
                SurveyNumber = f.SurveyNumber,
                District = f.District,
                Taluka = f.Taluka,
                Village = f.Village,
                Latitude = f.Latitude,
                Longitude = f.Longitude,
                ImageUrl = f.ImageUrl,
                Status = f.Status,
                CreatedAt = f.CreatedAt,
                VerifiedAt = f.VerifiedAt,
                VerifiedBy = f.VerifiedBy
            })
            .ToListAsync();

        return Ok(farms);
    }
}