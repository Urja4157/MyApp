using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyApp.Models.ViewModels
{
    public class ProductVM
    {
        public IEnumerable<Product> Products { get; set; }
    }
}
