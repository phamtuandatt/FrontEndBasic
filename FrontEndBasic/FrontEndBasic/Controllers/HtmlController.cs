using FrontEndBasic.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace FrontEndBasic.Controllers
{
    public class HtmlController : Controller
    {
        public IActionResult Demos_html()
        {
            return View();
        }

        
    }
}