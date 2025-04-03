using Microsoft.AspNetCore.Mvc;
using backend.Models;
using System.Collections.Generic;
using System.Linq;

namespace Api.Controllers
{  
   
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetUser()
        {
            var Users = new List<User> {
                new User { name = "qwer", password = 191, },
                new User{ name = "mnbv", password = 279},
                new User{name = "ghjk", password = 290},
                new User{name = "poiu", password= 132},
                new User {name = "zxcv", password = 319 },
                new User{name = "asdf", password = 259},
                new User {name = "tyui", password = 115 }
            };
            return Ok(Users);
        }
    }

}