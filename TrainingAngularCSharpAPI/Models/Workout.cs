namespace TrainingAngularCSharpAPI.Models
{
    public class Workout
    {
        public int Id { get; set; }

        public DateTime Date { get; set; }

        public int DistanceInMiles { get; set; }
               
        public long TimeInMinutes { get; set; }
    }
}
