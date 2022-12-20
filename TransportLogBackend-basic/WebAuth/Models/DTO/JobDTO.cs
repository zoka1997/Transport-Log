namespace WebAuth.Models.DTO
{
    public class JobDTO
    {
        public Guid Id { get; set; }
        public string LoadNo { get; set; }
        public int NoPallets { get; set; }
        public string LoadType { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Subject { get; set; }
        public Guid CustomerId { get; set; }
        public Guid DockId { get; set; }
        public Guid SupportStatusesId { get; set; }
    }
}
