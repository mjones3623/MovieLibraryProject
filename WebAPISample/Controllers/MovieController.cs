﻿using System;
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
            var movies = _context.Movies.Include(m => m).ToList();

            return Ok(movies);
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
        [HttpPost]
        public IActionResult Post([FromBody]Movie value)
        {
            // Create movie in db logic
            Movie movie = new Movie();
            return Ok(movie);
        }

        // PUT api/movie
        [HttpPut]
        public IActionResult Put([FromBody] Movie movie)
        {
            // Update movie in db logic
            if (movie.MovieId == 0)
            {
                _context.Movies.Add(movie);
            }
            else
            {
                Movie movieInDB = _context.Movies.Single(m => m.MovieId == movie.MovieId);
                movieInDB.Title = movie.Title;
                movieInDB.Genre = movie.Genre;
                movieInDB.Director = movie.Director;
            }
            _context.SaveChanges();
            //return RedirectToAction("Index", "Players");

            return Ok();
        }

        // DELETE api/movie/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            // Delete movie from db logic
            return Ok();
        }
    }
}