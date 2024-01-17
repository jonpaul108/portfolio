import { portfolioHTMLTemplate } from "./portfolioTemplate.js";
import Content from "../../content/curriculumDesign.js";

function combineContentWithTemplate() {
  console.log(Content);
  const generated = portfolioHTMLTemplate(Content);
  return generated;
}

export default combineContentWithTemplate;