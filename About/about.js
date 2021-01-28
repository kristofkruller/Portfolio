// Turn off on mobile also an option - becasue the animation doesnt look very well there, but not succeed so just used display none on skills tab in css. 
/*if ($(window).width() < 768) {
  $('body').remove('<script src="../About/about.js"></script>')
}
*/

//SKILLS TAB ANIMATION START//
//CARD ITSELF
const skills = document.querySelector('.skills');
const cards = document.querySelectorAll('.card');

//this is the first way to do - must be upgraded with one array method for all card
skills.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) /100;
  let yAxis = (window.innerWidth / 2 - e.pageY) /100;
  cards.forEach(card => {
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
});

//animate pop back / transition
skills.addEventListener('mouseleave', (e) => {
  cards.forEach(card => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  });
});

//transition enter
skills.addEventListener('mouseenter', (e) => {
  cards.forEach(card => {
    card.style.transition = 'none';
  });
});

//CARD ITSELF END
//ELEMENTS OF CARDS
const cardIcons = document.querySelectorAll('.content img');
const cardH = document.querySelectorAll('.content h3');
const cardP = document.querySelectorAll('.content p');

skills.addEventListener('mouseenter', (e) => {
  cardIcons.forEach(icon => {
    icon.style.transform = 'translateZ(35px)';
  });
  cardH.forEach(H => {
    H.style.transform = 'translateZ(35px)';
  });
  cardP.forEach(P => {
    P.style.transform = 'translateZ(35px)'
  });
});

skills.addEventListener('mouseleave', (e) => {
  cardIcons.forEach(icon => {
    icon.style.transform = 'translateZ(0px)';
  });
  cardH.forEach(H => {
    H.style.transform = 'translateZ(0px)';
  });
  cardP.forEach(P => {
    P.style.transform = 'translateZ(0px)'
  });
});
//SKILLS TAB ANIMATION END//
//CURSOR AND LINKS ANIMATION START//
let mouseCursor = document.querySelector('.cursor');
let homeBtn = document.querySelector('.home-button a');
let navLinks = document.querySelectorAll('.link a');

window.addEventListener('mousemove', cursor);
function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

homeBtn.addEventListener('mouseleave', (e) => {
  mouseCursor.classList.remove('link-grow');
  e.classList.remove('hovered-link');
});
homeBtn.addEventListener('mouseover', (e) => {
  mouseCursor.classList.add('link-grow');
  e.classList.add('hovered-link');
});

navLinks.forEach(link => {
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('link-grow');
    link.classList.remove('hovered-link');
  });
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add('link-grow');
    link.classList.add('hovered-link');
  });
});