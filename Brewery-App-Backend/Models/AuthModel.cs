using System.ComponentModel.DataAnnotations;

namespace Brewery_App_Backend.Models
{
    public class LoginRequest
    {
        public string? UserName { get; set; }
        public string? Password { get; set; }
    }
    public class RegisterRequest
    {
        public string UserName { get; set; } = null!;
        public string Email { get; set; } = string.Empty;
        public string Mobile { get; set; } = string.Empty;
        public string? Password { get; set; }
    }
}
