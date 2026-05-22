function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}
const typing = document.querySelector(".typing");

const words = [
  "Graphic Designer",
  "UI/UX Designer",
  "Web Developer",
  "Full Stack Developer",
  "Mobile Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if (isDeleting) {
    typing.textContent = currentWord.substring(0, charIndex--);
  } else {
    typing.textContent = currentWord.substring(0, charIndex++);
  }

  let speed = isDeleting ? 60 : 120;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1500;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
const skills = document.querySelectorAll(".clickable-skill");

skills.forEach(skill => {

  skill.addEventListener("click", () => {

    skill.classList.toggle("active");

  });

});