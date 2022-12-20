using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAuth.DBContext;
using WebAuth.Models;

namespace WebAuth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SupportStatusesController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public SupportStatusesController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        [Route("getSupportStatuses")]
        public IActionResult GetSupportStatuses()
        {
            var supportStatuses = dbContext.SupportStatuses.ToList();
            return Ok(supportStatuses);
        }

        [HttpPost]
        [Route("insertSupportStatuses")]
        public IActionResult insertSupportStatuses([FromBody] SupportStatuses supportStatuses)
        {
            SupportStatuses obj = new SupportStatuses()
            {
                Id = Guid.NewGuid(),
                Name = supportStatuses.Name,
                Description = supportStatuses.Description,
            };
            dbContext.SupportStatuses.Add(obj);
            dbContext.SaveChanges();

            return Ok("SupportStatuses Added!");
        }

        [HttpPut]
        [Route("updateSupportStatuses")]
        public IActionResult upadateSupportStatuses([FromBody] SupportStatuses supportStatuses)
        {
            var supportStatuse = dbContext.SupportStatuses.FirstOrDefault(x => x.Id == supportStatuses.Id);


            supportStatuse.Name = supportStatuses.Name;
            supportStatuse.Description = supportStatuses.Description;

            dbContext.SaveChanges();

            return Ok("SupportStatuses update sucessfull!");
        }

        [HttpDelete]
        [Route("deleteSupportStatuses/{Id}")]
        public IActionResult deleteSupportStatuses(Guid Id)
        {
            var supportStatuse = dbContext.SupportStatuses.FirstOrDefault(x => x.Id == Id);

            if (supportStatuse == null)
            {
                return Ok("UserManagement not found in Database!");
            }

            dbContext.SupportStatuses.Remove(supportStatuse);
            dbContext.SaveChanges();

            return Ok("SupportStatuses is delete!");

        }

    }
}