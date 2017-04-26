namespace MovieDb.Data.Migrations
{
    using Models;
    using System.Data.Entity.Migrations;
    public sealed class Configuration : DbMigrationsConfiguration<MovieDb.Data.MoviesContext>
    {
        public Configuration()
        {
            this.AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(MovieDb.Data.MoviesContext context)
        {
            context.Users.AddOrUpdate(new Users { FirstName = "Vasil", LastName = "Kamburov", UserName = "Vasil", Password = "12345" });
        }
    }
}
