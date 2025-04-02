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
                new Product { name = "Lakme 9 To 5 CC Complexion Care Cream", price = 191, color = "Bronze", image="foundation.jpeg"},
                new Product { name = "Sugar Matte As Hell Crayon Lipstick", price = 279, color= "01 Scarlett O' hara" ,image="lipstick.jpeg" },
                new Product {name = "Swiss Beauty Cheek It Up Blush", price = 290, color = "Mood Lifter Coral",image="blush.jpeg" },
                new Product {name = "Dazller Waterproof One Stroke Application Eyeliner", price = 132, color = "Night Black" ,image="eyeliner.jpeg"},
                new Product {name = "MARS Glowzilla 6 Colour Highlighter Palette", price = 319, color = "Shade -01",image="highliter.jpeg" },
                new Product {name = "MARS Dance Of Joy Eyeshadow Palette", price = 259, color = "03-multicolor",image="eyeshadow.jpeg" },
                new Product {name = "Fogg White Tone Pearl Face Powder", price = 115, color = "peach-pink",image="facepowder.jpeg" }
            };
            return Ok(products);
        }
    }

}
