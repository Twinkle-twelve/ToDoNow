using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Threading.Tasks;

namespace ToDoNow.Pages
{
    public class RegisterModel : PageModel
    {
        private readonly UserRepository _userRepository;

        public RegisterModel(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [BindProperty]
        public string Email { get; set; }

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
                await _userRepository.RegisterUserAsync(Email, Password);
                TempData["Message"] = "Registration successful! Please log in.";
                return RedirectToPage("/Login");
            }
            catch (Exception ex)
            {
                ModelState.AddModelError("", "Registration failed: " + ex.Message);
                return Page();
            }
        }
    }
}
