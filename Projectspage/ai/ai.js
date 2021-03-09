
const animPointsY = document.querySelectorAll('.animy');
const animPointsX = document.querySelectorAll('.animx');
const animPointsRevX = document.querySelectorAll('.animxrev');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 1s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none';
        }
    })
})
animPointsY.forEach(ypoint => {
    observer.observe(ypoint)
})

observer2 = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim2 1.5s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none';
        }
    })
})
animPointsX.forEach(xpoint => {
    observer2.observe(xpoint)
})

observer3 = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim3 1.5s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none';
        }
    })
})
animPointsRevX.forEach(revxpoint => {
    observer3.observe(revxpoint)
})

const hamburger = document.querySelector(".icon-burger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

/*SLIDER*/
let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
