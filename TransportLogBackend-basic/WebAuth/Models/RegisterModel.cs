using System.ComponentModel.DataAnnotations;

namespace WebAuth.Models
{
    public class RegisterModel
    {
        [Required(ErrorMessage = "Usename is required")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

    }
}
