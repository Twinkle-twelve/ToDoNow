using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoNow.Data
{
    public class UserRepository
    {
        private readonly List<User> _users = new List<User>();

        public Task RegisterUserAsync(string email, string password)
        {
            if (_users.Any(u => u.Email == email))
            {
                throw new InvalidOperationException("User already exists");
            }

            var user = new User { Email = email, Password = password };
            _users.Add(user);
            return Task.CompletedTask;
        }

        public Task<User> LoginUserAsync(string username, string password)
        {
            var user = _users.FirstOrDefault(u => u.Email == username && u.Password == password);
            return Task.FromResult(user);
        }
    }

    public class User
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
