using System.ComponentModel.DataAnnotations;

namespace MovieDb.Models
{
    public class Likes
    {
        public int Id { get; set; }
        [Required]
        public virtual int UserId { get; set; }
        [Required]
        public virtual int MovieId { get; set; }
    }
}
