using Microsoft.AspNetCore.Mvc;
using WebAuth.DBContext;
using WebAuth.Models;
using WebAuth.Models.DTO;


namespace WebAuth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public HomeController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        [Route("getHomeData")]
        public IActionResult getDocks()
        {
            var docks = dbContext.Docks.ToList();
            var customers = dbContext.Customers.ToList();
            var statuses = dbContext.SupportStatuses.ToList();
            var jobs = dbContext.Job.ToList();



            dynamic allData = new
            {
                docks = docks,
                customers = customers,
                statuses = statuses,
                jobs = jobs

            };
            // data.dock = docks;

            return Ok(allData);
        }

        //[HttpGet]
        //[Route("getJob")]
        //public IActionResult getJob()
        //{
        //    var jobs = dbContext.Job.ToList();


        //    dynamic allData = new
        //    {
        //       jobs = jobs

        //    };
        //    // data.dock = docks;

        //    return Ok(allData);
        //}


        [HttpGet]
        [Route("getJobData")]
        public IActionResult getJobData()
        {
            var jobs = dbContext.Job.ToList();

            // data.dock = docks;

            return Ok(jobs);
        }



        [HttpPost]
        [Route("insertJob")]
        public IActionResult insertJob([FromBody] JobDTO job)
        {
            Job obj = new Job()
            {
                Id = Guid.NewGuid(),
                CustomerId = job.CustomerId,
                Subject = job.Subject,
                SupportStatusesId = job.SupportStatusesId,
                DockId = job.DockId,
                NoPallets = job.NoPallets,
                LoadNo = job.LoadNo,
                LoadType = job.LoadType,
                StartDate = job.StartDate,
                EndDate = job.EndDate,



            };
            dbContext.Job.Add(obj);
            dbContext.SaveChanges();

            return Ok("Job Added!");
        }

        [HttpPut]
        [Route("updateJob")]
        public IActionResult UpdateJob([FromBody] JobDTO job)
        {
            var jobs = dbContext.Job.FirstOrDefault(x => x.Id == job.Id);


            jobs.CustomerId = job.CustomerId;
            jobs.Subject = job.Subject;
            jobs.SupportStatusesId = job.SupportStatusesId;
            jobs.DockId = job.DockId;
            jobs.NoPallets = job.NoPallets;
            jobs.LoadNo = job.LoadNo;
            jobs.LoadType = job.LoadType;
            jobs.StartDate = job.StartDate;
            jobs.EndDate = job.EndDate;

            dbContext.SaveChanges();
            return Ok("Jobs updated sucessfull!");
        }



        [HttpDelete]
        [Route("deleteJob/{Id}")]
        public IActionResult deleteJob(Guid Id)
        {
            var dock = dbContext.Job.FirstOrDefault(x => x.Id == Id);

            if (dock == null)
            {
                return Ok("Job not found in Database!");
            }

            dbContext.Job.Remove(dock);
            dbContext.SaveChanges();

            return Ok("Job is delete!");
        }
    }
}
