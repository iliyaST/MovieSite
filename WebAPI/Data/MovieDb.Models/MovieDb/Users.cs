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
        [MaxLength(100)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(100)]
        public string LastName { get; set; }
        [MaxLength(100)]
        public string Email { get; set; }
        [MaxLength(50)]
        public string City { get; set; }
        [Required]
        [MaxLength(100)]
        public string UserName { get; set; }
        [Required]
        [MaxLength(100)]
        public string Password { get; set; }

        public virtual ICollection<Comments> Comments
        {
            get { return this.comments; }
            set { this.comments = value; }
        }
    }
}
