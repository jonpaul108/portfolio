export const portfolioHTMLTemplate = (intro, body, conclusion) => {
  let postHTML = `<div class="portfolioPost">`;
  postHTML += generateIntroHTML(intro);
  body.forEach(content => {
    postHTML += generateBodyHTML(content);
  })
  postHTML += generateConclusionHTML(conclusion);
  postHTML += `</div>`;
  return postHTML;
}

function generateIntroHTML(content) {
  //html
}

function generateBodyHTML(content) {
 //html 
}

function generateConclusionHTML(content) {
  //html
}