const skills = [
  { skillName: "JavaScript", skillLevel: 90 },
  { skillName: "HTML", skillLevel: 85 },
  { skillName: "CSS", skillLevel: 80 },
  { skillName: "React", skillLevel: 60 },
  { skillName: "SvelteKit", skillLevel: 70 },
  //... add as many skills as you need
];

const form = document.querySelector("#form");

document.addEventListener("DOMContentLoaded", () => {
  // Ensure the document is fully loaded
  const skillContainer = document.querySelector(".skill"); // Target the container where you want to append skill bars

  skills.forEach((skill) => {
    // Create necessary elements
    const skillItem = document.createElement("li");
    const skillBar = document.createElement("div");
    const skillLevel = document.createElement("div");
    const skillNameParagraph = document.createElement("p");

    // Set the attributes and styles
    skillBar.className = "skill-bar";
    skillLevel.className = "skill-level";
    skillLevel.style.width = `${skill.skillLevel}%`;
    skillNameParagraph.textContent = skill.skillName;

    // Append to the DOM
    skillItem.appendChild(skillNameParagraph);
    skillBar.appendChild(skillLevel);
    skillItem.appendChild(skillBar);
    skillContainer.appendChild(skillItem);
  });
});
 
document.querySelector(".toggle-icon").addEventListener("click", function () {
  var skillList = document.querySelector(".skills ul");
  if (skillList.classList.contains("visible")) {
    skillList.classList.remove("visible");
  } else {
    skillList.classList.add("visible");
  }
});


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
//  document.querySelector("#name").value = "";
//  document.querySelector("#email").value = "";
// document.querySelector("#message").value = "";
  //   document.querySelector("#accessKey").value = "";
  form.reset();
}