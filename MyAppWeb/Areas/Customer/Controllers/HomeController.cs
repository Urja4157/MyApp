﻿using Microsoft.AspNetCore.Mvc;
using MyApp.DataAccessLayer.Infrastructure.IRepository;
using MyApp.Models;
using MyApp.Models.ViewModels;
using System.Diagnostics;

namespace MyAppWeb.Areas.Customer.Controllers
{
    [Area("Customer")]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IUnitOfWork _unitOfWork;

        public HomeController(ILogger<HomeController> logger, IUnitOfWork unitOfWork)
        {
            _logger = logger;
            _unitOfWork = unitOfWork;
        }
        [HttpGet]

        public IActionResult Index()
        {
            IEnumerable<Product> products = _unitOfWork.Product.GetAll(includeProperties:"Category");
            return View(products);
        }
        [HttpGet]

        public IActionResult Details(int? id)
        {
            Product product = _unitOfWork.Product.GetT(x => x.Id == id);
            
                product.Category = _unitOfWork.Category.GetT(c => c.Id == product.CategoryId);
                Cart cart = new Cart()
                {
                    Product = product,
                    Count = 1
                };
                return View(cart);
            
            //Cart cart = new Cart()
            //{
            //    Product = _unitOfWork.Product.GetT(x => x.Id == id, includeProperties: "Category"),
            //    Count = 1


            //};
            //return View(cart);

        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}