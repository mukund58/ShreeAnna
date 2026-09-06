using backend.Features.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Features.Auth.Controllers;

[ApiController]
[Route("api/auth-test")]
[Authorize]
public class AuthTestController : ControllerBase
{
    [HttpGet("authenticated")]
    public IActionResult Authenticated()
    {
        return Ok(new
        {
            message = "You are authenticated."
        });
    }

    [HttpGet("fpo-manager")]
    [Authorize(Roles = Roles.FpoManager)]
    public IActionResult FpoManager()
    {
        return Ok(new
        {
            message = "You are an FPO Manager."
        });
    }

    [HttpGet("quality-inspector")]
    [Authorize(Roles = Roles.QualityInspector)]
    public IActionResult QualityInspector()
    {
        return Ok(new
        {
            message = "You are a Quality Inspector."
        });
    }
}