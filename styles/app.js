//Navbar circle effect
const hamburger = document.querySelector(".icon-burger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
//Navbar circle effect END

/*Email function
document.querySelector("textarea").addEventListener("submit".submitForm);

function sendEmail(name, email, message) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "design.kruller@gmail.com",
    Password: "pqekqcthxbckwwsa",
    To: "design.kruller@gmail.com",
    From: "design.kruller@gmail.com",
    Subject: `${name} sent you a review`,
    Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
  }).then(function (message) { alert("Mail sent successfully") 
});
}
*/
/*version2
function sendEmail() { 
  Email.send({ 
    Host: "smtp.gmail.com", 
    Username: "design.kruller@gmail.com",
    Password: "pqekqcthxbckwwsa",
    To: "design.kruller@gmail.com",
    From: "design.kruller@gmail.com",
    Subject: "Recived a review",
    Body: `Email: ${email} <br/> Message: ${message}`,
  }) 
    .then(function (message) { 
      alert("mail sent successfully") 
    }); 
} 
*/
