using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;

namespace ToDoNow.Tests
{
    [TestClass]
    public class UserRepositoryTests
    {
        [TestMethod]
        public async Task TestRegisterUserAsync()
        {
            var userRepository = new UserRepository();
            await userRepository.RegisterUserAsync("test@example.com", "password");

            var user = await userRepository.LoginUserAsync("test@example.com", "password");
            Assert.IsNotNull(user);
            Assert.AreEqual("test@example.com", user.Email);
        }

        [TestMethod]
        public async Task TestRegisterUserAsync_ExistingUser()
        {
            var userRepository = new UserRepository();
            await userRepository.RegisterUserAsync("test@example.com", "password");

            try
            {
                await userRepository.RegisterUserAsync("test@example.com", "password");
                Assert.Fail("Should throw an exception");
            }
            catch (InvalidOperationException ex)
            {
                Assert.AreEqual("User already exists", ex.Message);
            }
        }

        [TestMethod]
        public async Task TestLoginUserAsync()
        {
            var userRepository = new UserRepository();
            await userRepository.RegisterUserAsync("test@example.com", "password");

            var user = await userRepository.LoginUserAsync("test@example.com", "password");
            Assert.IsNotNull(user);

            var invalidUser = await userRepository.LoginUserAsync("test@example.com", "wrongpassword");
            Assert.IsNull(invalidUser);
        }
    }
}
