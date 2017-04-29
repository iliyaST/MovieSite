﻿using MovieDb.Data;
using MovieDb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebAPI.Controllers
{
    [Authorize]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CommentsController : ApiController
    {
        private readonly IRepository<Comments> comments;
        private readonly IRepository<Users> users;
        private readonly IRepository<Movies> movies;
        public CommentsController()
        {
            var context = new MoviesContext();
            this.comments = new EfGenericRepository<Comments>(context);
            this.users = new EfGenericRepository<Users>(context);
            this.movies = new EfGenericRepository<Movies>(context);
        }
        public IHttpActionResult CreateComment(int userId,string imdbId,string text)
        {
            if (string.IsNullOrEmpty(text))
            {
                return this.BadRequest("Comment can`t be empty");
            }
            var currentUser = this.GetUser(userId);
            if (currentUser == null)
            {
                return this.BadRequest("No such user");
            }
            var currentMovie = this.GetMovie(imdbId);
            if (currentUser == null)
            {
                return this.BadRequest("No such movie");
            }

            var comment = new Comments
            {
                Comment = text,
                User = currentUser,
                Movie = currentMovie
            };
            try
            {
                this.comments.Add(comment);
                this.comments.SaveChanges();
            }
            catch
            {
                return this.BadRequest("Can`t save this comment");
            }

            return this.Ok();
        }
 
        public IHttpActionResult DeleteComment(int comentId)
        {
            var currentComent = this.comments.All().Where(x => x.Id == comentId && x.isDeleted == false).FirstOrDefault();
            if (currentComent == null)
            {
                return this.BadRequest("comment is either deleted or doesn`t exist");
            }
            try
            {
                currentComent.isDeleted = true;
                this.comments.Update(currentComent);
                this.comments.SaveChanges();
            }
            catch
            {
                return this.BadRequest("Comment can`t be deleted ");
            }

            return this.Ok();
        }
         
        public IHttpActionResult GetAllCommentsForAMovie(string imdbId)
        {
            var currentMovie = this.GetMovie(imdbId);
            if (currentMovie == null)
            {
                return this.BadRequest("no such movie");
            }
            var allMovies = this.comments.All().Where(x => x.Movie == currentMovie && x.isDeleted == false);

            return this.Ok(allMovies);
        }

        public IHttpActionResult GetAllCommentsFromAUser(int userId)
        {
            var currentUser = this.GetUser(userId);
            if (currentUser == null)
            {
                return this.BadRequest("no such user");
            }
            var allMovies = this.comments.All().Where(x => x.User==currentUser && x.isDeleted == false);

            return this.Ok(allMovies);
        }

        private Users GetUser(int userId)
        {
            return this.users.All().Where(x => x.UsersId == userId).FirstOrDefault();
        }
        private Movies GetMovie(string imdbId)
        {
            return this.movies.All().Where(x => x.ImdbID == imdbId).FirstOrDefault();
        }
    }

}
