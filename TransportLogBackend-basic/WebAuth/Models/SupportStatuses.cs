using System.ComponentModel.DataAnnotations;

namespace WebAuth.Models
{
    public class SupportStatuses
    {

        //public Guid Id { get; set; } 
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
