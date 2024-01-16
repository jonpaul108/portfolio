export const portfolioHTMLTemplate = ({ intro, body, conclusion }) => {
  console.log("all:::::", intro, body, conclusion)
  let postHTML = ` <div class="main-portfolio" id="main-portfolio">`;
  postHTML += generateHeroHTML(intro);
  body.forEach(content => {
    postHTML += generateBodyHTML(content);
  })
  postHTML += generateConclusionHTML(conclusion);
  postHTML += `</div>`;
  return postHTML;
}

function generateHeroHTML(content) {
  console.log("intro html:", content)
  const { title, description, image } = content;
   return `<section class="hero-portfolio section-portfolio">
        <div class="portfolio-title">
          <h1>${title}</h1>
          <p>${description}</p>
        </div>
        <div class="image-container">
          <img src="${image}" alt="Hero Image">
        </div>
        </section>
      `
}

function generateBodyHTML(content) {

  const { description, image, imageDesc } = content;
  return `<section class="content section-portfolio">
           <div class="content-text">
             <p>${description}</p>
           </div>
             <div class="image-container">
                 <img src="${image}" alt="Body Image">
                 <div class="image-description">
                   <p>${imageDesc}
                   </p>
                 </div>
             </div>
         </section>`;
 
 
}

function generateConclusionHTML(content) {
  const { header, description } = content;
  return `<section class="conclusion section-portfolio">
    <div class="conclusion-header">
      <h2>${header}</h2>
    </div>
    <div class="content-conclusion">
      <p>
        ${description}
      </p>
    </div>
  </section>`;
}