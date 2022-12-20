namespace WebAuth.Models
{
    public class UserManagement
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Phone { get; set; }
        public string Role { get; set; }
        public bool IsActive { get; set; }


    }
}
