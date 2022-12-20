using System.ComponentModel.DataAnnotations;

namespace WebAuth.Models
{
    public class LoginModel
    {
        [Required(ErrorMessage = "Usename is required")]
        public string Username { get; set; }
        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
    }
}
