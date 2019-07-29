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

        [HttpGet("[action]")]
        public Enemy Enemies()
        {
          using (var db = new DataContext())
          	{
    					Random rand = new Random();
    					List<Enemy> theEnemy = db.Enemy.Where(e => e.RewardClass == 1).ToList();
    					return theEnemy[rand.Next(0,theEnemy.Count-1)];
    				}
    		}
    }
}
