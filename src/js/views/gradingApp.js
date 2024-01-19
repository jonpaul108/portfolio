import { portfolioHTMLTemplate } from "./portfolioTemplate.js";
import Content from "../../content/gradingApp.js";

function combineContentWithTemplate() {
  const generated = portfolioHTMLTemplate(Content);
  return generated;
}

export default combineContentWithTemplate;