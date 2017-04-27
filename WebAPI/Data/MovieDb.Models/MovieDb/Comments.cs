namespace MovieDb.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    public class Comments
    {
        public int Id
        {
            get; set;
        }

        [MaxLength(500)]
        public string Comment { get; set; }

        public DateTime CreatedOn { get; set; }

        [Required]
        public virtual Users User { get; set; }

        [Required]
        public virtual Movies Movie { get; set; }

    }
}
