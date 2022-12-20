using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebAuth.IndentityAuth;
using WebAuth.Models;

namespace WebAuth.DBContext
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) 
            : base(options) 
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Customers> Customers { get; set; }
        public DbSet<Job> Job { get; set; }
        public DbSet<SupportStatuses> SupportStatuses { get; set; }
        public DbSet<Dock> Docks { get; set; }
        public DbSet<UserManagement> UserManagement { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
