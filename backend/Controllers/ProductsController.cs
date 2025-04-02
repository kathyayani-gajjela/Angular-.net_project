using Microsoft.AspNetCore.Mvc;
using backend.Models;
using System.Collections.Generic;
using System.Linq;

namespace MyApi.Controllers
{  
   
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetProducts()
        {
            var products = new List<Product> {
                new Product { Id = 1, RoomNumber = 101, ClientName = "Alice" },
                new Product { Id = 2, RoomNumber = 102, ClientName = "Bob" }
            };
            return Ok(products);
        }
    }

}
