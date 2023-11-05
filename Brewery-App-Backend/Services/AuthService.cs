using Azure.Core;
using Brewery_App_Backend.Dbcontext;
using Brewery_App_Backend.Entities;
using Brewery_App_Backend.Models;
using Microsoft.EntityFrameworkCore;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Data;
using System.Security.Authentication;

namespace Brewery_App_Backend.Services
{
    public class AuthService : IAuthService
    {
        private BreweryContext _context;

        public AuthService(
            BreweryContext context)
        {
            _context = context;
        }


        // Login
        public async Task<Boolean> Authenticate(LoginRequest request)
        {
            var connectionString = "mongodb+srv://sowmithaudt:pN9yb1cZlVaHmZ8d@cluster0.h0qjtrr.mongodb.net/\r\npN9yb1cZlVaHmZ8d";
            var client = new MongoClient(connectionString);
            var collection = client.GetDatabase("Brewery").GetCollection<User>("User");
            var user = collection.AsQueryable().Where(x => x.UserName == request.UserName).FirstOrDefault();
            if (user == null)
            {
                throw new AuthenticationException("Email Or Password is Incorrect");
            }
            return true;
        }

        // Register User
        public async Task<Boolean> Register(RegisterRequest request)
        {
            var connectionString = "mongodb+srv://sowmithaudt:pN9yb1cZlVaHmZ8d@cluster0.h0qjtrr.mongodb.net/\r\npN9yb1cZlVaHmZ8d";
            var client = new MongoClient(connectionString);
            var collection = client.GetDatabase("Brewery").GetCollection<User>("User");
            var user = collection.AsQueryable().Where(x => x.UserName == request.UserName).FirstOrDefault();
            if (user != null)
            {
                throw new BadHttpRequestException("Username already exists");
            }
            var newUser = new User();
            newUser.Email = request.Email;
            newUser.UserName = request.UserName;
            newUser.Password = request.Password;
            newUser.Mobile = request.Mobile;
            newUser.Id = Guid.NewGuid().ToString();

            try
            {
                await collection.InsertOneAsync(newUser);
                return true;
            }
            catch (Exception ex)
            {
                throw new BadHttpRequestException("Something went wrong" + ex);
            }

        }
    }
}