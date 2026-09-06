using backend.Features.Auth.Entities;
using backend.Features.Farmers.Entities;
using backend.Features.Farms.Entities;
using backend.Features.Fpo.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users => Set<User>();

    public DbSet<FpoMember> FpoMembers => Set<FpoMember>();

    public DbSet<Farmer> Farmers => Set<Farmer>();

    public DbSet<Farm> Farms => Set<Farm>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        ConfigureUser(modelBuilder);
        ConfigureFpoMember(modelBuilder);
        ConfigureFarmer(modelBuilder);
        ConfigureFarm(modelBuilder);
    }

    private static void ConfigureUser(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(x => x.Id);

            entity.Property(x => x.Email)
                .IsRequired()
                .HasMaxLength(150);

            entity.Property(x => x.PasswordHash)
                .IsRequired();

            entity.Property(x => x.Role)
                .IsRequired()
                .HasMaxLength(50);

            entity.HasIndex(x => x.Email)
                .IsUnique();

            entity.HasOne(x => x.FpoMember)
                .WithOne(x => x.User)
                .HasForeignKey<User>(x => x.FpoMemberId)
                .OnDelete(DeleteBehavior.SetNull);
        });
    }

    private static void ConfigureFpoMember(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<FpoMember>(entity =>
        {
            entity.HasKey(x => x.Id);

            entity.Property(x => x.EmployeeCode)
                .IsRequired()
                .HasMaxLength(30);

            entity.Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(150);

            entity.Property(x => x.Role)
                .IsRequired()
                .HasMaxLength(50);

            entity.HasIndex(x => x.EmployeeCode)
                .IsUnique();
        });
    }

    private static void ConfigureFarmer(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Farmer>(entity =>
        {
            entity.HasKey(x => x.Id);

            entity.Property(x => x.FarmerCode)
                .IsRequired()
                .HasMaxLength(30);

            entity.Property(x => x.FullName)
                .IsRequired()
                .HasMaxLength(150);

            entity.Property(x => x.Phone)
                .IsRequired()
                .HasMaxLength(20);

            entity.HasIndex(x => x.FarmerCode)
                .IsUnique();
        });
    }

    private static void ConfigureFarm(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Farm>(entity =>
        {
            entity.HasKey(x => x.Id);

            entity.Property(x => x.FarmCode)
                .IsRequired()
                .HasMaxLength(30);

            entity.Property(x => x.FarmName)
                .IsRequired()
                .HasMaxLength(150);

            entity.Property(x => x.AreaInAcres)
                .HasPrecision(10, 2);

            entity.Property(x => x.SurveyNumber)
                .IsRequired()
                .HasMaxLength(50);

            entity.Property(x => x.Status)
                .IsRequired()
                .HasMaxLength(50);

            entity.HasIndex(x => x.FarmCode)
                .IsUnique();

            entity.HasOne(x => x.Farmer)
                .WithMany(x => x.Farms)
                .HasForeignKey(x => x.FarmerId)
                .OnDelete(DeleteBehavior.Cascade);
        });
    }
}