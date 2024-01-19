import { htmlString, utils} from "./views/home.js";
import GradingApp from "./views/gradingApp.js";
import MCSPApp from "./views/mcspAdmissions.js";
import CurriculumDesign from "./views/curriculumDesign.js";
import LaserCoaching from "./views/laserCoaching.js";


export const routes = {
  "/": { title: "Home", render: htmlString, utils: utils },
  "/home": { title: "Home", htmlString, utils: utils },
  "/portfolio/mcspAdmissions": { title: "MCSP Admissions", render: MCSPApp },
  "/portfolio/curriculumDesign": { title: "Curriculum Design", render: CurriculumDesign },
  "/portfolio/laserCoaching": { title: "Laser Coaching", render: LaserCoaching },
  "/portfolio/gradingApp": { title: "Grading App", render: GradingApp },
};

function showPortfolioItems(itemInfo) {
  const html = addPortfolioItem(...itemInfo);
}

function router() {
  let view = routes[location.pathname];
  console.log("view:", view, location.pathname);

  if (view) {
    document.title = view.title;
    app.innerHTML = view.render();
    if (view.utils) view.utils();
  } else {
    history.replaceState("", "", "/");
    router();
  }
}

// Handle navigation
window.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    console.log("click event:", e.target.href, e.target.dataset.linkname)
    e.preventDefault();
    // history.pushState("", "", e.target.dataset.linkname);
    history.pushState("", "", e.target.dataset.linkname || e.target.href);
    router();
  }
});

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);



