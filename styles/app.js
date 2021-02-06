  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBjfjet0MK_3-huTobCTiirDyiWBW8dX2Y",
    authDomain: "portfoliofromscratch-d9f36.firebaseapp.com",
    projectId: "portfoliofromscratch-d9f36",
    storageBucket: "portfoliofromscratch-d9f36.appspot.com",
    messagingSenderId: "735990285162",
    appId: "1:735990285162:web:2603ac17ce93d919535b13"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Ref contactinfo collections
  let contactInfo = firebase.database().ref("infos");
  
//EMAIL FUNCTIONALITY FIREBASE
document.querySelector('.email-contact').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

let name = document.querySelector('#name-area');
let email = document.querySelector('#email-area');
let message = document.querySelector('#text-area');

saveContactInfo(name, email, message);
document.querySelector('.email-contact').reset();
}

//Infosave for FireBase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
};



//NAVBAR CIRCLE EFFECT
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

