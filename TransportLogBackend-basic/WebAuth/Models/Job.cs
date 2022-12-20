using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAuth.Models
{
    public class Job
    {
        public Guid Id { get; set; }
        public string LoadNo { get; set; }
        public int NoPallets { get; set; }
        public string LoadType { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Subject { get; set; }
        public Guid CustomerId { get; set; }
        public Guid SupportStatusesId { get; set; }
        public Guid DockId { get; set; }

        [ForeignKey("CustomerId")]
        public virtual Customers Customers { get; set; }

        [ForeignKey("SupportStatusesId")]
        public virtual SupportStatuses SupportStatuses { get; set; }

        [ForeignKey("DockId")]
        public virtual Dock Dock { get; set; }




    }
}
