using System.ComponentModel.DataAnnotations;

namespace WebAuth.Models
{
    public class Dock
    {
        //     public Guid Id { get; set; }
        [Key]
        public Guid Id { get; set; }
        public string DockName { get; set; }

    }
}
