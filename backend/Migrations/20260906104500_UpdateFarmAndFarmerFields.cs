using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class UpdateFarmAndFarmerFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
                DO $$ 
                BEGIN
                    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='Farmers' AND column_name='UpdatedAt') THEN
                        ALTER TABLE ""Farmers"" ADD COLUMN ""UpdatedAt"" timestamp with time zone NOT NULL DEFAULT NOW();
                    END IF;

                    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='Farms' AND column_name='Latitude') THEN
                        ALTER TABLE ""Farms"" ADD COLUMN ""Latitude"" numeric(10,7) NOT NULL DEFAULT 0.0;
                    END IF;

                    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='Farms' AND column_name='Longitude') THEN
                        ALTER TABLE ""Farms"" ADD COLUMN ""Longitude"" numeric(10,7) NOT NULL DEFAULT 0.0;
                    END IF;

                    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='Farms' AND column_name='ImageUrl') THEN
                        ALTER TABLE ""Farms"" ADD COLUMN ""ImageUrl"" character varying(500) NOT NULL DEFAULT '';
                    END IF;
                END $$;
            ");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UpdatedAt",
                table: "Farmers");

            migrationBuilder.DropColumn(
                name: "Latitude",
                table: "Farms");

            migrationBuilder.DropColumn(
                name: "Longitude",
                table: "Farms");

            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Farms");
        }
    }
}
