import { main } from "./views/main.view.js";
import { about } from "./views/about.view.js";
import { blog } from "./views/blog.view.js";
import { article } from "./views/article.view.js";
import { c_menu } from "./c_menu.config.js";

m.route(document.querySelector(".main_section"), "/main", {
  "/main": main,
  "/about": about,
  "/blog": blog,
  "/article": article,
});

window.onload = function () {
  const context_menu = new make_c_menu({
    target: ".c_menu",
    c_menu,
  });

  context_menu.init();
  document.addEventListener("contextmenu", (event) => event.preventDefault());
};

function main_button_hover() {
  if (window.location.href.includes("#!/main")) {
    document.querySelectorAll(".btn_tog_container a").forEach((e) => {
      e.onmouseover = () => {
        document.querySelector(".wrapper_title").innerText = e.href
          .replace("https://", "")
          .replace(".com", "")
          .replace(".gg", "")
          .replace("www.", "")
          .replace("/member", "")
          .replace("/user", "")
          .replace("axorax.github.io/", "axorax.github.io")
          .replace("axorax.itch.io/", "axorax.itch.io");
        document.querySelector(".wrapper_title").classList.add("t1");
      };
      e.onmouseleave = () => {
        document.querySelector(".wrapper_title").innerText = "Axorax";
        document.querySelector(".wrapper_title").classList.remove("t1");
      };
    });
  }
}

main_button_hover();

setInterval(() => {
  main_button_hover();
}, 1000);

// console.log(m.route.get())
