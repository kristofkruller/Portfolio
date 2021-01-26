//CARD ITSELF
const skills = document.querySelector('.skills');
const cards = document.querySelectorAll('.card');

//this is the first way to do - must be upgraded with one array method for all card
skills.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) /100;
  let yAxis = (window.innerWidth / 2 - e.pageY) /100;
  cards[0].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  cards[1].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  cards[2].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  cards[3].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//animate pop back / transition
skills.addEventListener('mouseleave', (e) => {
  cards[0].style.transition = 'all 0.5s ease';
  cards[0].style.transform = `rotateY(0deg) rotateX(0deg)`;
  cards[1].style.transition = 'all 0.5s ease';
  cards[1].style.transform = `rotateY(0deg) rotateX(0deg)`;
  cards[2].style.transition = 'all 0.5s ease';
  cards[2].style.transform = `rotateY(0deg) rotateX(0deg)`;
  cards[3].style.transition = 'all 0.5s ease';
  cards[3].style.transform = `rotateY(0deg) rotateX(0deg)`;
});
//transition enter
skills.addEventListener('mouseenter', (e) => {
  cards[0].style.transition = 'none';
  cards[1].style.transition = 'none';
  cards[2].style.transition = 'none';
  cards[3].style.transition = 'none';
});
//CARD ITSELF END
//ELEMENTS OF CARDS
const cardIcons = document.querySelectorAll('.content img');
const cardH = document.querySelectorAll('.content h3');
const cardP = document.querySelectorAll('.content p');

skills.addEventListener('mouseenter', (e) => {
  cardIcons[0].style.transform = 'translateZ(35px) rotate(190deg)';
  cardIcons[1].style.transform = 'translateZ(35px)';
  cardIcons[2].style.transform = 'translateZ(35px)';
  cardIcons[3].style.transform = 'translateZ(35px)';

  cardH[0].style.transform = 'translateZ(35px)';
  cardH[1].style.transform = 'translateZ(35px)';
  cardH[2].style.transform = 'translateZ(35px)';
  cardH[3].style.transform = 'translateZ(35px)';

  cardP[0].style.transform = 'translateZ(35px)';
  cardP[1].style.transform = 'translateZ(35px)';
  cardP[2].style.transform = 'translateZ(35px)';
  cardP[3].style.transform = 'translateZ(35px)';
});
skills.addEventListener('mouseleave', (e) => {
  cardIcons[0].style.transform = 'translateZ(0px) rotate(0deg)';
  cardIcons[1].style.transform = 'translateZ(0px)';
  cardIcons[2].style.transform = 'translateZ(0px)';
  cardIcons[3].style.transform = 'translateZ(0px)';

  cardH[0].style.transform = 'translateZ(0px)';
  cardH[1].style.transform = 'translateZ(0px)';
  cardH[2].style.transform = 'translateZ(0px)';
  cardH[3].style.transform = 'translateZ(0px)';

  cardP[0].style.transform = 'translateZ(0px)';
  cardP[1].style.transform = 'translateZ(0px)';
  cardP[2].style.transform = 'translateZ(0px)';
  cardP[3].style.transform = 'translateZ(0px)';
});
//SKILLS TAB ANIMATION END//
