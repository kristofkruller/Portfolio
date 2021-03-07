
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