const portfolioProjects = [
  {
    img: "../../assets/jira_scrum_project.png",
    title: "Jira Scrum Project",
    alt: "Jira Scrum Project",
  },
  {
    img: "",
    title: "Jira Scrum Project",
    alt: "Jira Scrum Project",
  },
  {
    img: "",
    title: "Jira Scrum Project",
    alt: "Jira Scrum Project",
  },
  {
    img: "",
    title: "Jira Scrum Project",
    alt: "Jira Scrum Project",
  },
];

export const utils = function () {
  const portfolio = document.querySelector("#portfolio");
  const arrow = document.querySelector("#arrow-next-section");
  const sectionsList = document.querySelectorAll("section");
  const form = document.querySelector("#form");

  const sectionIds = Array.from(sectionsList).map((el) => el.id);
  let sectionNum = 0;
  var arrowRotated = false;

  //handle submit
  document
    .querySelector("#form")
    .addEventListener("submit", async function (e) {
      e.preventDefault();
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const message = document.querySelector("#message").value;
      const accessKey = document.querySelector("#accessKey").value;
      const payload = { name, email, message, accessKey };
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      resetForm();
      alert("Thank you! Your message was submitted.");
    });

  function resetForm() {
    form.reset();
  }

  //handle arrow navigation
  arrow.addEventListener("click", () => {
    sectionNum = cycleSections();
    const nextSection = sectionsList[sectionNum];
    console.log(nextSection);
    nextSection.scrollIntoView({ behavior: "smooth" });
    if (sectionNum === 0 && arrowRotated) {
      flipArrowDown();
    }
    if (sectionNum === sectionsList.length - 1 && !arrowRotated) {
      flipArrowUp();
    }
  });

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
    arrow.style.transform = "rotate(180deg)";
    toggleRotation();
  }

  function toggleRotation() {
    arrowRotated = !arrowRotated;
  }

  function updateHistory(e) {
    const link = e.dataset.linkname;
    console.log("updater:", e.dataset.linkname);
    history.pushState("", "", link);
    router();
  }

  
};

const portfolioItems = generatePortfolioHTML();

function createPortfolioItem(obj) {
  const { img, alt, title } = obj;
  const item = `
   <div class="portfolio-item" data-link data-linkname="portfolio/gradingApp">
      <div class="portfolio-img-container">
          <img src=${img} alt=${alt}>
      </div>
      <div class="project-info">
        <h3>${title}</h3>
      </div>
    </div>
  `;
  return item;
}

function generatePortfolioHTML() {
  let portfolioItems = ``;
  portfolioProjects.forEach((el) => {
    const item = createPortfolioItem(el);
    portfolioItems += item;
  });
  return portfolioItems;
}

export const htmlString = () => `
<section class="circles-container" id="hero-message"></section>
        <div class="circle large">
            <h1>Hello, I'm <span class="circle-name">Jon</span></h1>
            <p class="medium-text">I'm a project manager with super powered collaborative skills</p>
        </div>
        <div class="circle medium"></div>
        <div class="circle small"></div>

      </section>
   
      <div class="arrow-container" id="arrow-next-section">
        <i class="material-icons arrow">double_arrow</i>
      </div>

  

<!-- Portfolio Section -->

<section class="portfolio" id="portfolio">
   ${portfolioItems}
  <!-- Repeat the above block for each portfolio item -->
</section>
<!-- <section class="portfolio-section" id="portfolio">
  <h2 class="portfolio-heading">Portfolio</h2>
  <h2>Under Constructon</h2>
    <img src="SVG/Product-Page-under-construction-01.svg" alt="Portfolio Under Construction">
</section> -->

<!-- Contact Form Section -->
<section class="contact-form-section" id="contact">
  <div class="contact-message">
    <h2>Have an upcoming project?</h2>
    <p>Feel free to reach out.</p>
    <p>I'd love to talk with you about your next challenge.</p>
    </div>
  <form id="form" action="https://api.staticforms.xyz/submit" method="post">
      <!-- <h2>Say Hello</h2> -->
      <input id="accessKey" type="hidden" name="accessKey" value="c9c4fefc-36bb-47d5-831c-afa8da016134">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <input type="submit" value="Submit" class="submit">
    </form>
</section>
`;
