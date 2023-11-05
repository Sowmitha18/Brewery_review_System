using Brewery_App_Backend.Models;

namespace Brewery_App_Backend.Services
{
    public interface IAuthService
    {
        Task<Boolean> Authenticate(LoginRequest request);
        Task<Boolean> Register(RegisterRequest request);
    }
}
