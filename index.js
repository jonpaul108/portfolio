// const skills = [
//   { skillName: "JavaScript", skillLevel: 90 },
//   { skillName: "HTML", skillLevel: 85 },
//   { skillName: "CSS", skillLevel: 80 },
//   { skillName: "React", skillLevel: 60 },
//   { skillName: "SvelteKit", skillLevel: 70 },
//   //... add as many skills as you need
// ];

const portfolio = document.querySelector("#portfolio");
const arrow = document.querySelector("#arrow-next-section");
const sectionsList = document.querySelectorAll("section");
const sectionIds = Array.from(sectionsList).map(el => el.id);
let sectionNum = 0;
var arrowRotated = false;

const form = document.querySelector("#form");

// document.addEventListener("DOMContentLoaded", () => {

// });

document.querySelector("#form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  const accessKey = document.querySelector("#accessKey").value;
  const package = { name, email, message, accessKey };
  const response = await fetch("https://api.staticforms.xyz/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(package),
  });
  resetForm();
  alert("Thank you! Your message was submitted.")
});

function resetForm() {
  form.reset();
}

arrow.addEventListener("click", () => {
  sectionNum = cycleSections();
  const nextSection = sectionsList[sectionNum];
  console.log(nextSection);
  nextSection.scrollIntoView({ behavior: 'smooth' });
  if (sectionNum === 0 && arrowRotated) {
    flipArrowDown()
  } 
  if (sectionNum === (sectionsList.length - 1) && !arrowRotated) {
    flipArrowUp();
  }

})

function cycleSections() {
  const num = sectionNum + 1;
  const maxLen = sectionsList.length - 1;
  if (num > maxLen) {
    return 0;
  } 
  return num;
}

function flipArrowDown() {
  arrow.style.transform = "rotate(0deg)";
  toggleRotation();
}

function flipArrowUp() {
  arrow.style.transform = "rotate(-180deg)";
  toggleRotation();
}

function toggleRotation() {
  arrowRotated = !arrowRotated
}