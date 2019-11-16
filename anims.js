// Small delightful* interactions
//
// *hopefully :)
//
// If this becomes too complicated, move to preact, but
// for now this should be fine.

const nav = document.getElementById("nav-header");

const state = {
  headerTransparent: nav.classList.contains("nav-transparent"),
};

// Scroll dependent
function scrollEvent() {
  const scroll = window.scrollY;

  // Header
  if (scroll >= 10) {
    if (state.headerTransparent) nav.classList.remove("nav-transparent");
    state.headerTransparent = false;
  } else {
    if (!state.headerTransparent) nav.classList.add("nav-transparent");
    state.headerTransparent = true;
  }
}
window.addEventListener("scroll", scrollEvent);
scrollEvent();
