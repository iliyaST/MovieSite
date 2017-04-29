namespace WebAPI.Controllers
{
    using Models.Users;
    using MovieDb.Data;
    using MovieDb.Models;
    using System.Linq;
    using System.Web.Http;
    using System.Web.Http.Cors;
    [Authorize]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UsersController : ApiController
    {
        private readonly IRepository<Users> users;

        public UsersController()
        {
            this.users = new EfGenericRepository<Users>(new MoviesContext());
        }
        [HttpPost]
        public IHttpActionResult Register(Users user)
        {
            var allUsersQuearable = this.users.All();
            var userWithThisNameCount = allUsersQuearable.Where(x => x.UserName == user.UserName).Count();
         
            if (userWithThisNameCount > 0)
            {
                return this.BadRequest("Username is taken");
            }

            this.users.Add(user);
            this.users.SaveChanges();
            
            return this.Ok(this.users.All().Where(x => x.UserName == user.UserName).FirstOrDefault().UsersId);
        }
        [HttpGet]
        public IHttpActionResult Get()
        {
            var res= this.users.All().Where( x=>x.Expire == false).OrderBy(x => x.LastName).ThenBy(x => x.FirstName).Take(10).ToList();
            return this.Ok(res);

        }
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            if (id<0)
            {
                return this.BadRequest("Id of user can`t be null or empty");
            }

            var res = GetUser(id);
            return this.Ok(res);

        }

        public IHttpActionResult LogIn(LoginUserModel userData)
        {
            var currentUser=this.users.All().Where(x => x.UserName == userData.UserName).FirstOrDefault();
            if (currentUser == null)
            {
                return this.BadRequest("No such Username");
            }
            if (currentUser.Password != userData.Password)
            {
                return this.BadRequest("Wrong Password");
            }

            return this.Ok(currentUser);
        }

        public IHttpActionResult UpdateUserData(Users userData)
        {
            var currentUser = this.users.All().Where(x => x.UserName == userData.UserName).FirstOrDefault();
            currentUser.City = userData.City;
            currentUser.Email = userData.Email;
            currentUser.FirstName = userData.FirstName;
            currentUser.LastName = userData.LastName;
            currentUser.Password = userData.Password;
            currentUser.isMale = userData.isMale;
            try
            {
                this.UpdateUser(currentUser);
            }
            catch
            {
                return this.BadRequest("InvalidData");
            }

            return this.Ok(currentUser);
        }

        public IHttpActionResult ExpireUser(int userId)
        {
            var user = GetUser(userId);
            user.Expire = true;
            try
            {
                UpdateUser(user);
            }
            catch
            {
                return this.BadRequest("Can`t expire user");
            }

            return this.Ok(user);
            
        }

        private Users GetUser(int id)
        {

            return this.users.All().Where(x => x.UsersId == id && x.Expire == false).FirstOrDefault();
        }

        private void UpdateUser(Users data)
        {
                this.users.Update(data);
                this.users.SaveChanges();          
        }
    }
}
