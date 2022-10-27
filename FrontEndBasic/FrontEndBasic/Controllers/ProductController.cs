using Microsoft.AspNetCore.Mvc;

namespace FrontEndBasic.Controllers
{
    public class ProductController : Controller
    {
        public IActionResult Show_Home_Page()
        {
            return View();
        }
    }
}
