using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MovieDb.Models
{
    public class Movies
    {
        private ICollection<Comments> comments;

        public Movies()
        {
            Likes = 0;
            Dislikes = 0;
            this.comments = new HashSet<Comments>();
        }
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string ImdbID { get; set; }

        public int Likes { get; set; }

        public int Dislikes { get; set; }
        public virtual ICollection<Comments> Comments
        {
            get { return this.comments; }
            set { this.comments = value; }
        }
    }
}
