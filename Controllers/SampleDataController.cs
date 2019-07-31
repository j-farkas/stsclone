using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using my_new_app.Context;

namespace my_new_app.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {

        [HttpGet("Enemies/{level}")]
        public Enemy Enemies(int level)
        {
          using (var db = new DataContext())
          	{
    					Random rand = new Random();
    					List<Enemy> theEnemy = db.Enemy.Where(e => e.RewardClass == level).ToList();
              Console.WriteLine(theEnemy);
    					return theEnemy[rand.Next(0,theEnemy.Count)];
    				}
    		}

        [HttpGet("Rewards/{level}")]
        public List<Card> Rewards(int level)
        {
          using (var db = new DataContext())
          	{
    					 List<Card> theCards = db.Card.Where(e => e.Rarity <= level && e.Rarity > 0).ToList();
               return theCards;

    				}
    		}
    }
}
