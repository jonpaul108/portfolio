export const portfolioHTMLTemplate = (intro, body, conclusion) => {
  let postHTML = ` <div class="main-portfolio" id="main-portfolio">`;
  postHTML += generateHeroHTML(intro);
  // body.forEach(content => {
    postHTML += generateBodyHTML(body);
  // })
  postHTML += generateConclusionHTML(conclusion);
  postHTML += `</div>`;
  return postHTML;
}

function generateHeroHTML(content) {
  //html
   return `<section class="hero">
        <div class="portfolio-title">
          <h1>Your Portfolio Title</h1>
          <p>brief description of the portfolio</p>
        </div>
            <img src="https://cdn2.thecatapi.com/images/6u9.jpg" alt="Hero Image">
        </section>
      `
}

function generateBodyHTML(content) {
  //html 
    return `<section class="content">
          <div class="content-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <span class="white-highlight">
                    adipiscing elit, sed</span> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
          </div>
            <div class="image-container">
                <img src="https://cdn2.thecatapi.com/images/6u9.jpg" alt="Body Image">
                <div class="image-description">
                  <p>Lorem ipsum dolor sit amet, consectetur <span class="white-highlight">
                    adipiscing elit, sed</span> do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
            </div>
        </section>`
}

function generateConclusionHTML(content) {
  //html
  return `<section class="conclusion">
    <div class="conclusion-header">
      <h2>Conclusion</h2>
    </div>
    <div class="content-conclusion">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore{" "}
        <span class="white-highlight">adipiscing elit, sed</span> et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure{" "}
      </p>
    </div>
  </section>;`
}