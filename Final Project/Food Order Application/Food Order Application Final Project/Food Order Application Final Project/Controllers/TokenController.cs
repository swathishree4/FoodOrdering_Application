//using JWTAuthentication.Model;
using Food_Order_Application_Final_Project.Model;
//using Food_Ordering_Application.Model;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace JWTAuthentication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {

        private readonly SymmetricSecurityKey _key;
        private readonly FoodOrderDbContext _con;


        public TokenController(IConfiguration configuration, FoodOrderDbContext con)
        {
            _key = new SymmetricSecurityKey(UTF8Encoding.UTF8.GetBytes(configuration["Key"]!));
            _con = con;
        }

        [HttpPost]
        public IActionResult GenerateToken(User user)
        {
            string token = string.Empty;
            User user1 = ValidateUser(user.Email, user.PasswordHash, user.Role);
            string role = user1.Role;
            if (role != null)
            {
                var claims = new List<Claim>
        {
            new Claim(JwtRegisteredClaimNames.NameId, user.FullName!),
            new Claim(JwtRegisteredClaimNames.Email, user.Email),
            new Claim(JwtRegisteredClaimNames.Sub, user.UserId.ToString()),
            new Claim(ClaimTypes.Role, role) // Add the user's role as a claim
        };

                var cred = new SigningCredentials(_key, SecurityAlgorithms.HmacSha256);
                var tokenDescription = new SecurityTokenDescriptor
                {
                    SigningCredentials = cred,
                    Subject = new ClaimsIdentity(claims),
                    Expires = DateTime.Now.AddMinutes(2)
                };

                var tokenHandler = new JwtSecurityTokenHandler();
                var createToken = tokenHandler.CreateToken(tokenDescription);
                token = tokenHandler.WriteToken(createToken);
            }
            else
            {
                return NoContent();
            }

            return Ok(new { token = token });
        }

        private User ValidateUser(string email, string password, string role)
        {
            var user = _con.Users.FirstOrDefault(u => u.Email == email && u.PasswordHash == password && u.Role == role);
            if (user != null)
            {
                return user!;
            }
            return null;
        }
    }
}
