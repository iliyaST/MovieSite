using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MovieDb.Models
{
    public class Users
    {
        private ICollection<Comments> comments;

        public Users()
        {
            this.comments = new HashSet<Comments>();
        }
        public int UsersId { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }

        public string Email { get; set; }

        public string City { get; set; }
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }

        public virtual ICollection<Comments> Comments
        {
            get { return this.comments; }
            set { this.comments = value; }
        }
    }
}
