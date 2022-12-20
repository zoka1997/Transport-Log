using Microsoft.AspNetCore.Mvc;
using WebAuth.DBContext;
using WebAuth.Models;

namespace WebAuth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocksController : Controller
    {

        private readonly ApplicationDbContext dbContext;
        public DocksController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }


        [HttpGet]
        [Route("getDocks")]
        public IActionResult getDocks()
        {
            var docks = dbContext.Docks.ToList();
            return Ok(docks);
        }


        [HttpPost]
        [Route("insertDocks")]
        public IActionResult insertDocks([FromBody] Dock docks)
        {
            //if(customers == null) {
            //    return Ok("Some feild's are empty!");
            //}

            Dock obj = new Dock()
            {
                Id = Guid.NewGuid(),
                DockName = docks.DockName,
            };
            dbContext.Docks.Add(obj);
            dbContext.SaveChanges();

            return Ok("Docks Added!");
        }


        [HttpPut]
        [Route("updateDocks")]
        public IActionResult updateDocks([FromBody] Dock docks)
        {
            var dock = dbContext.Docks.FirstOrDefault(x => x.Id == docks.Id);


            dock.DockName = docks.DockName;
            
            dbContext.SaveChanges();
            return Ok("Docks updated sucessfull!");
        }

        [HttpDelete]
        [Route("deleteDocks/{Id}")]
        public IActionResult deleteDocks(Guid Id)
        {
            var dock = dbContext.Docks.FirstOrDefault(x => x.Id == Id);


            if (dock == null)
            {
                return Ok("Dock not found in Database!");
            }

            dbContext.Docks.Remove(dock);
            dbContext.SaveChanges();

            return Ok("Dock is delete!");
        }

    }
}
