using Brewery_App_Backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace Brewery_App_Backend.Dbcontext
{
    public class BreweryContext : DbContext
    {

        public BreweryContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> user { get; set; }

    }
}
