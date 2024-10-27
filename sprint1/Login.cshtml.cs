using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Threading.Tasks;

namespace ToDoNow.Pages
{
    public class LoginModel : PageModel
    {
        private readonly UserRepository _userRepository;

        public LoginModel(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [BindProperty]
        public string Username { get; set; }

        [BindProperty]
        public string Password { get; set; }

        public void OnGet()
        {
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            try
            {
                var user = await _userRepository.LoginUserAsync(Username, Password);
                if (user != null)
                {
                    // Login successful, redirect to tasks list page
                    return RedirectToPage("/Tasks");
                }
                else
                {
                    ModelState.AddModelError("", "Invalid username or password");
                    return Page();
                }
            }
            catch (Exception ex)
            {
                ModelState.AddModelError("", "Login failed: " + ex.Message);
                return Page();
            }
        }
    }
}
