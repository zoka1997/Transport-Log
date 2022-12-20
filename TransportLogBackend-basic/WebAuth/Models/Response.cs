namespace WebAuth.Models
{
    public class Response
    {
        public string Status { get; set; }
        public string Error { get; set; }
        public string Message { get; internal set; }
    }
}
