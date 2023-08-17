
using Microsoft.AspNetCore.Mvc;

namespace MyAppWeb.Controllers
{
    public class CategoryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
