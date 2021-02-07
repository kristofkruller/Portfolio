// SCRIPT COPY FOR SETTING FIRE
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

// REF CONTACTINFO FOR COLLECT DATA
  let contactInfo = firebase.database().ref("infos");
  
// EMAIL FUNCTIONALITY FIREBASE
document.querySelector('.email-contact').addEventListener('submit', submitForm);

function submitForm(e) {
  // Block submit for page
  e.preventDefault();

let name = document.querySelector('#name-area').value;
let email = document.querySelector('#email-area').value;
let message = document.querySelector('#text-area').value;

saveContactInfo(name, email, message);
// MAKE THE CONTENT RESET AFTER CLICK
document.querySelector('.email-contact').reset();
}

// INFOSAVE-PUSH FOR THE STORE 
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
};
// FIREBASE END

// NAVBAR CIRCLE EFFECT
const hamburger = document.querySelector(".icon-burger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
// NAVBAR CIRCLE EFFECT END

