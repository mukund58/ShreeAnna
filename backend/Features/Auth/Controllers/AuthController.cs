using backend.Features.Auth.DTOs;
using backend.Features.Auth.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Features.Auth.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    [AllowAnonymous]
    public async Task<ActionResult<LoginResponse>> Login(
        LoginRequest request)
    {
        var response = await _authService.LoginAsync(request);

        if (response is null)
        {
            return Unauthorized(new
            {
                message = "Invalid email or password."
            });
        }

        return Ok(response);
    }

    [HttpGet("me")]
    [Authorize]
    public ActionResult<CurrentUserResponse> GetCurrentUser()
    {
        var user = _authService.GetCurrentUser();

        if (user is null)
        {
            return Unauthorized();
        }

        return Ok(user);
    }
}