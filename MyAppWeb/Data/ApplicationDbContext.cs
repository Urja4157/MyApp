using Microsoft.EntityFrameworkCore;
using MyAppWeb.Models;

namespace MyAppWeb.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options): base(options)
        {

        }

        public DbSet<Category> Categories { get; set; }
    }
}
