using Microsoft.AspNetCore.Mvc;

namespace FrontEndBasic.Controllers
{
    public class ContactController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
