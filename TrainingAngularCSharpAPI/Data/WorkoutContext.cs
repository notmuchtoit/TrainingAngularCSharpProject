#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TrainingAngularCSharpAPI.Models;

namespace TrainingAngularCSharpAPI.Data
{
    public class WorkoutContext : DbContext
    {
        public WorkoutContext (DbContextOptions<WorkoutContext> options)
            : base(options)
        {
        }

        public DbSet<TrainingAngularCSharpAPI.Models.Workout> Workout { get; set; }
    }
}
