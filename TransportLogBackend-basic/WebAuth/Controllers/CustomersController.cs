using Microsoft.AspNetCore.Mvc;
using WebAuth.DBContext;
using WebAuth.Models;

namespace WebAuth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public CustomersController (ApplicationDbContext dbContext) 
        {
            this.dbContext = dbContext;
        }


        [HttpGet]
        [Route("getCustomers")]
        public IActionResult GetCustomers()
        {
            var customers = dbContext.Customers.ToList();
            return Ok(customers);
        }

        [HttpPost]
        [Route("insertCustomer")]
        public IActionResult insertCustomer([FromBody]Customers customers)
        {
            //if(customers == null) {
            //    return Ok("Some feild's are empty!");
            //}

            Customers obj = new Customers()
            {
                Id = Guid.NewGuid(),
                FirstName = customers.FirstName,
                LastName = customers.LastName,
                Address = customers.Address,
                City = customers.City,
                Country = customers.Country,
                Phone = customers.Phone,
                IsActive = customers.IsActive
                
            };
            dbContext.Customers.Add(obj);
            dbContext.SaveChanges();

            return Ok("Customers Added!");
        }


        // PUT api/<CustomersController>/5

        [HttpPut]
        [Route("updateCustomer")]
        public IActionResult upadateCustomer([FromBody]Customers customers)
        {
            var customer = dbContext.Customers.FirstOrDefault(x => x.Id == customers.Id);


            customer.FirstName = customers.FirstName;
            customer.LastName = customers.LastName;
            customer.Address = customers.Address;
            customer.City = customers.City;
            customer.Country = customers.Country;
            customer.Phone = customers.Phone;
            customer.IsActive = customers.IsActive;


            dbContext.SaveChanges();


            return Ok("Customer update sucessfull!");

        }

        // DELETE api/<CustomersController>/5
        [HttpDelete]
        [Route("deleteCustomer/{Id}")]
        public IActionResult deleteCustomer(Guid Id)
        {
            var customer = dbContext.Customers.FirstOrDefault(x => x.Id == Id);


            if (customer == null) {
                return Ok("Customer not found in Database!");
            }

            dbContext.Customers.Remove(customer);
            dbContext.SaveChanges();

            return Ok("Customer is delete!");
        }
    }
}
