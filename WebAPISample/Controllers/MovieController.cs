using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPISample.Data;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private ApplicationContext _context;
        public MovieController(ApplicationContext context)
        {
            _context = context;
        }
        // GET api/movie
        [HttpGet]
        public IActionResult Get()
        {
            // Retrieve all movies from db logic
            //return Ok(new string[] { "movie1 string", "movie2 string" });
            //var movies = _context.Movies.Include(m => m).ToList();
            return Ok(_context.Movies);

            //return Ok(movies);
        }

        // GET api/movie/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            // Retrieve movie by id from db logic
            // return Ok(movie);
            try
            {
                Movie movieFromDb = _context.Movies.Where(m => m.MovieId == id).FirstOrDefault();
                return Ok(movieFromDb);
            }
            catch (Exception e)
            {
                return Ok();
            }
            
        }

        // POST api/movie
        [HttpPost("{id}")]
        public IActionResult Post([FromBody]Movie value)
        {
            // Create movie in db logic
            Movie movie = new Movie();
            if (value.MovieId == 0)
            {
                movie.Title = value.Title;
                movie.Genre = value.Genre;
                movie.Director = value.Director;
                _context.Movies.Add(movie);
                _context.SaveChanges();
            }
            return Ok(movie);
        }

        // PUT api/movie
        [HttpPut("{id}")]
        public IActionResult Put([FromBody] Movie movie)
        {
            try
            {
                Movie movieInDB = _context.Movies.Single(m => m.MovieId == movie.MovieId);
                movieInDB.Title = movie.Title;
                movieInDB.Director = movie.Director;
                movieInDB.Genre = movie.Genre;
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return Ok();
            }
            // Update movie in db logic
            //return RedirectToAction("Index", "Players");

            //return Ok();
        }

        // This was the attempted controller that Brett tried to fix.
        // PUT api/movie
        //[HttpPut]
        //public IActionResult Put(int id, [FromBody] Movie movie)
        //{
        //    try
        //    {
        //        Movie movieInDB = _context.Movies.Single(m => m.MovieId == movie.MovieId);
        //        movieInDB.Title = movie.Title;
        //        movieInDB.Director = movie.Director;
        //        movieInDB.Genre = movie.Genre;
        //        _context.SaveChanges();
        //        return Ok();
        //    }
        //    catch (Exception e)
        //    {
        //        return Ok();
        //    }
        //    // Update movie in db logic
        //    //return RedirectToAction("Index", "Players");

        //    //return Ok();
        //}

        // DELETE api/movie/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            // Delete movie from db logic
            return Ok();
        }
    }
}