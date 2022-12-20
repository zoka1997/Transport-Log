using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAuth.DBContext;
using WebAuth.Models;

namespace WebAuth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserManagementController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public UserManagementController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        [Route("getUserManagement")]
        public IActionResult GetUserManagement()
        {
            var userManagement = dbContext.UserManagement.ToList();
            return Ok(userManagement);
        }

        [HttpPost]
        [Route("insertUserManagement")]
        public IActionResult insertUserManagement([FromBody] UserManagement userManagement)
        {
            UserManagement obj = new UserManagement()
            {
                Id = Guid.NewGuid(),
                FirstName = userManagement.FirstName,
                LastName = userManagement.LastName,
                Address = userManagement.Address,
                City = userManagement.City,
                Country = userManagement.Country,
                Phone = userManagement.Phone,
                Role = userManagement.Role,
                IsActive = userManagement.IsActive
            };
            dbContext.UserManagement.Add(obj);
            dbContext.SaveChanges();

            return Ok("UserManagement Added!");

        }

        [HttpPut]
        [Route("updateUserManagement")]
        public IActionResult upadateUserManagement([FromBody] UserManagement userManagement)
        {
            var userManagements = dbContext.UserManagement.FirstOrDefault(x => x.Id == userManagement.Id);

            userManagements.FirstName = userManagement.FirstName;
            userManagements.LastName = userManagement.LastName;
            userManagements.Address = userManagement.Address;
            userManagements.City = userManagement.City;
            userManagements.Country = userManagement.Country;
            userManagements.Phone = userManagement.Phone;
            userManagements.IsActive = userManagement.IsActive;


            dbContext.SaveChanges();


            return Ok("UserManagement update sucessfull!");
        }

        [HttpDelete]
        [Route("deleteUserManagement/{Id}")]
        public IActionResult deleteUserManagement(Guid Id)
        {
            var userManagements = dbContext.UserManagement.FirstOrDefault(x => x.Id == Id);

            if (userManagements == null)
            {
                return Ok("UserManagement not found in Database!");
            }

            dbContext.UserManagement.Remove(userManagements);
            dbContext.SaveChanges();

            return Ok("UserManagement is delete!");
        }
    }
}