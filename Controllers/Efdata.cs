using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace my_new_app.Context
{

	public class DataContext : DbContext
	{
		public DbSet<Card> Card { get; set; }
		public DbSet<Enemy> Enemy { get; set; }
		public DbSet<Attack> Attack { get; set;}
		public DbSet<Relic> Relic { get; set;}
		public DbSet<Event> Event { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseMySQL("server=localhost;database=stsclone;user=root;password=root;port=8889;");
		}
	}

	public class Card
	{
		public int Id { get; set; }
		public int Cost { get; set; }
		public string Type { get; set; }
		public int Value { get; set; }
		public int Effects { get; set; }
		public int Color { get; set; }
	}

	public class Enemy
	{
		public int Id { get; set; }
		public List<Attack> Attacks { get; set; }
		public int RewardClass { get; set; }
		public int HP { get; set; }
	}

	public class Attack
	{
		public int Id { get; set; }
		public string Type { get; set; }
		public int Value { get; set; }
		public int Effects { get; set; }
	}

	public class Relic
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public int Value { get; set; }
		public string Effects {get; set; }
	}

	public class Event
	{
		public int Id { get; set; }
		public string Description { get; set; }
		public int RewardClass { get; set; }
	}

}
