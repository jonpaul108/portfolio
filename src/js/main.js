import { htmlString, utils} from "./views/home.js";
import GradingApp from "./views/gradingApp.js";





export const routes = {
  "/": { title: "Home", render: htmlString, func: utils },
  "/home": { title: "Home", htmlString, func: utils },
  "/portfolio/gradingApp": { title: "Grading App", render: GradingApp },
};

function showPortfolioItems(itemInfo) {
  const html = addPortfolioItem(...itemInfo);
}

function router() {
  let view = routes[location.pathname];
  console.log(view, location.pathname);

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
    e.preventDefault();
    history.pushState("", "", e.target.href || e.target.dataset.linkname);
    router();
  }
});

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);



