import { load_particles } from "./load_particles.js";

load_particles();

window.addEventListener("popstate", function (event) {
  load_particles();
});
