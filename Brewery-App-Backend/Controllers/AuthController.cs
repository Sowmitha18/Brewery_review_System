using Azure.Core;
using Brewery_App_Backend.Models;
using Brewery_App_Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Final.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IAuthService _authService;

        public AuthController(IAuthService userService)
        {
            _authService = userService;
        }


        [HttpPost("Login")]
        public async Task<Boolean> Authenticate(LoginRequest request)
        {
            if(request == null)
            {
                return false;
            }
            var response = await _authService.Authenticate(request);
            return response;
        }



        [HttpPost("Register")]
        public async Task<Boolean> Register(RegisterRequest request)
        {
            if (request == null)
            {
                return false;
            }
            var response = await _authService.Register(request);
            return response;
        }

    }
}
