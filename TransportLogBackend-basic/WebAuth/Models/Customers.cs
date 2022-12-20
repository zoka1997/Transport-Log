using System.ComponentModel.DataAnnotations;

namespace WebAuth.Models
{
    public class Customers
    {
        // public Guid Id { get; set; }
        [Key]
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public int Phone { get; set; }
        public bool IsActive { get; set; } 

    }
}
