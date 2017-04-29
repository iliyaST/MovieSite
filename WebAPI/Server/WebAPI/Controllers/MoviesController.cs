using MovieDb.Data;
using MovieDb.Models;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using WebAPI.Models.Movies;

namespace WebAPI.Controllers
{
    [Authorize]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class MoviesController : ApiController
    {
        private readonly IRepository<Movies> movies;
        private readonly IRepository<Likes> likes;
        private readonly IRepository<Dislikes> dislikes;

        public MoviesController()
        {
            var context = new MoviesContext();
            this.movies = new EfGenericRepository<Movies>(context);
            this.likes = new EfGenericRepository<Likes>(context);
            this.dislikes = new EfGenericRepository<Dislikes>(context);
        }
        public IHttpActionResult GetAll()
        {
            var res = this.movies.All().OrderBy(x => x.Name).ToList();
            return this.Ok(res);
        }

        public IHttpActionResult GetById(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                return this.BadRequest("Id of movie can`t be null or empty");
            }

            var res = this.movies.All().Where(x => x.ImdbID == id).FirstOrDefault();

            return this.Ok(res);
        }

        public IHttpActionResult Add(MoviesCreateModel movie)
        {
            var currentMovie = this.movies.All().Where(x => x.ImdbID == movie.ImdbID).FirstOrDefault();
            if (currentMovie == null)
            {
                try
                {
                    var movieToAdd = new Movies { Name = movie.Name, ImdbID = movie.ImdbID };
                    this.movies.Add(movieToAdd);
                    this.movies.SaveChanges();
                }
                catch
                {
                    return this.BadRequest("Invalid movie to add");
                }

                return this.Ok(this.movies.All().Where(x => x.Name == movie.Name).FirstOrDefault().Id);
            }
            else
            {
                return this.BadRequest("This Movie Already Exists");
            }

        }

        public IHttpActionResult LikeAMovie(string movieImdbid, int userId)
        {
            var currentMovie = this.movies.All().Where(x => x.ImdbID == movieImdbid).FirstOrDefault();
            if (currentMovie == null)
            {
                return this.BadRequest("No such movie");
            }
            currentMovie.LikesNumber = currentMovie.LikesNumber + 1;

            try
            {
                LikeOrDislikeAMovie(true, userId, currentMovie);
                this.movies.Update(currentMovie);
                this.movies.SaveChanges();

            }
            catch
            {
                return this.BadRequest("Invalid data to like a movie");
            }
            return this.Ok();
        }

        public IHttpActionResult DislikeAMovie(string movieImdbid, int userId)
        {
            var currentMovie = this.movies.All().Where(x => x.ImdbID == movieImdbid).FirstOrDefault();
            if (currentMovie == null)
            {
                return this.BadRequest("No such movie");
            }
            currentMovie.DislikesNumber = currentMovie.DislikesNumber + 1;
            try
            {
                LikeOrDislikeAMovie(false, userId, currentMovie);
                this.movies.Update(currentMovie);
                this.movies.SaveChanges();

            }
            catch
            {
                return this.BadRequest("Invalid data to dislike a movie");
            }
            return this.Ok();
        }

        public IHttpActionResult GetTopLikedMovies(int number)
        {
            var res = this.movies.All().OrderByDescending(x => x.Likes).Take(number).ToList();
            return this.Ok(res.Select(x => x.ImdbID));
        }

        public IHttpActionResult GetTopDisLikedMovies(int number)
        {
            var res = this.movies.All().OrderByDescending(x => x.Dislikes).Take(number).ToList();
            return this.Ok(res.Select(x => x.ImdbID));
        }


        private bool isAlreadyLikedOrDislikedAMovie(int userId, Movies movie, bool isLike)
        {
            dynamic isliked = null;
            if (isLike)
            {
                isliked = this.likes.All().Where(x => x.MovieId == movie.Id && x.UserId == userId).FirstOrDefault();
            }
            else
            {
                isliked = this.dislikes.All().Where(x => x.MovieId == movie.Id && x.UserId == userId).FirstOrDefault();
            }

            if (isliked != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        private void LikeOrDislikeAMovie(bool isLike, int userId, Movies movie)
        {
            if (isLike)
            {
                if (!isAlreadyLikedOrDislikedAMovie(userId, movie, true))
                {
                    this.likes.Add(new Likes { UserId = userId, MovieId = movie.Id });
                }
            }
            else
            {
                if (!isAlreadyLikedOrDislikedAMovie(userId, movie, false))
                {
                    this.dislikes.Add(new Dislikes { UserId = userId, MovieId = movie.Id });
                }
            }

        }

    }
}
