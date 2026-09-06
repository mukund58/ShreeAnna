using backend.Features.Farmers.Entities;
using backend.Features.Farms.Entities;
using Microsoft.EntityFrameworkCore;
using backend.Features.Fpo.Entities;
using backend.Features.Auth.Entities;
namespace backend.Data;

public static class DbSeeder
{
    public static async Task SeedAsync(AppDbContext context)
    {
        await context.Database.MigrateAsync();

        await SeedFarmersAsync(context);
        await SeedFarmsAsync(context);
        await SeedUsersAsync(context);
    }

    private static async Task SeedUsersAsync(AppDbContext context)
    {
        if (await context.Users.AnyAsync())
        {
            return;
        }

        var users = new List<User>
        {
            new User
            {
                Id = Guid.Parse("99999999-9999-9999-9999-999999999999"),
                Email = "user1@example.com",
                PasswordHash = BCrypt.Net.BCrypt.HashPassword("password1"),
                Role = "Admin",
                CreatedAt = DateTime.UtcNow
            },
            new User
            {
                Id = Guid.Parse("88888888-8888-8888-8888-888888888888"),
                Email = "user2@example.com",
                PasswordHash = BCrypt.Net.BCrypt.HashPassword("password2"),
                Role = "User",
                CreatedAt = DateTime.UtcNow
            }
        };

        await context.Users.AddRangeAsync(users);
        await context.SaveChangesAsync();
    }

    private static async Task SeedFarmersAsync(AppDbContext context)
    {
        if (await context.Farmers.AnyAsync())
        {
            return;
        }

        var farmers = new List<Farmer>
        {
            new Farmer
            {
                Id = Guid.Parse("11111111-1111-1111-1111-111111111111"),
                FarmerCode = "FAR-0001",
                FullName = "Ramesh Patel",
                Phone = "9876543210",
                Email = "ramesh@example.com",
                Address = "Bordi",
                District = "Dahod",
                Taluka = "Dahod",
                Village = "Bordi",
                DateOfBirth = new DateTime(1985, 5, 12, 0, 0, 0, DateTimeKind.Utc),
                Status = "Active",
                CreatedAt = DateTime.UtcNow
            },

            new Farmer
            {
                Id = Guid.Parse("22222222-2222-2222-2222-222222222222"),
                FarmerCode = "FAR-0002",
                FullName = "Mahesh Vasava",
                Phone = "9876543211",
                Email = "mahesh@example.com",
                Address = "Bordi",
                District = "Dahod",
                Taluka = "Dahod",
                Village = "Bordi",
                DateOfBirth = new DateTime(1979, 8, 20, 0, 0, 0, DateTimeKind.Utc),
                Status = "Active",
                CreatedAt = DateTime.UtcNow
            },

            new Farmer
            {
                Id = Guid.Parse("33333333-3333-3333-3333-333333333333"),
                FarmerCode = "FAR-0003",
                FullName = "Suresh Rathod",
                Phone = "9876543212",
                Email = "suresh@example.com",
                Address = "Dahod",
                District = "Dahod",
                Taluka = "Dahod",
                Village = "Dahod",
                DateOfBirth = new DateTime(1990, 2, 15, 0, 0, 0, DateTimeKind.Utc),
                Status = "Active",
                CreatedAt = DateTime.UtcNow
            }
        };

        await context.Farmers.AddRangeAsync(farmers);
        await context.SaveChangesAsync();
    }

    private static async Task SeedFarmsAsync(AppDbContext context)
    {
        if (await context.Farms.AnyAsync())
        {
            return;
        }

        var farms = new List<Farm>
        {
            new Farm
            {
                Id = Guid.Parse("aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa"),
                FarmCode = "FARM-0001",
                FarmerId = Guid.Parse(
                    "11111111-1111-1111-1111-111111111111"
                ),
                FarmName = "Ramesh Main Farm",
                AreaInAcres = 5.50m,
                MilletType = "Kodo Millet",
                SoilType = "Black Soil",
                SurveyNumber = "123/1",
                District = "Dahod",
                Taluka = "Dahod",
                Village = "Bordi",
                Latitude = 22.8397m,
                Longitude = 74.2558m,
                ImageUrl = "",
                Status = "Verified",
                CreatedAt = DateTime.UtcNow,
                VerifiedAt = DateTime.UtcNow,
                VerifiedBy = null
            },

            new Farm
            {
                Id = Guid.Parse("bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb"),
                FarmCode = "FARM-0002",
                FarmerId = Guid.Parse(
                    "11111111-1111-1111-1111-111111111111"
                ),
                FarmName = "Ramesh North Farm",
                AreaInAcres = 3.25m,
<<<<<<< HEAD
                MilletType = "Kodo Millet",
=======
>>>>>>> d874c80 (Add: data seeding)
                SoilType = "Black Soil",
                SurveyNumber = "124/2",
                District = "Dahod",
                Taluka = "Dahod",
                Village = "Bordi",
                Latitude = 22.8421m,
                Longitude = 74.2580m,
                ImageUrl = "",
                Status = "Pending Verification",
                CreatedAt = DateTime.UtcNow
            },

            new Farm
            {
                Id = Guid.Parse("cccccccc-cccc-cccc-cccc-cccccccccccc"),
                FarmCode = "FARM-0003",
                FarmerId = Guid.Parse(
                    "22222222-2222-2222-2222-222222222222"
                ),
                FarmName = "Mahesh Millet Farm",
                AreaInAcres = 7.00m,
                MilletType = "Rabi Millet",
                SoilType = "Loamy Soil",
                SurveyNumber = "210/3",
                District = "Dahod",
                Taluka = "Dahod",
                Village = "Bordi",
                Latitude = 22.8405m,
                Longitude = 74.2602m,
                ImageUrl = "",
                Status = "Pending Verification",
                CreatedAt = DateTime.UtcNow
            }
        };

        await context.Farms.AddRangeAsync(farms);
        await context.SaveChangesAsync();
    }
}