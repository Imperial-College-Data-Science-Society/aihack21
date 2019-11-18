// Small delightful* interactions
//
// *hopefully :)
//
// If this becomes too complicated, move to preact, but
// for now this should be fine.

const nav = document.getElementById("nav-header");
const eventDate = new Date("Sat Feb 29 2020 12:00:00 GMT+0000 (GMT)"); // FIXME
const underlineTitles = [...document.querySelectorAll(".section h1")]

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

  // Underline titles
  underlineTitles.forEach(hdr => {
    console.log(hdr.offsetTop, scroll);
    console.log(hdr.offsetTop - scroll);
    if (hdr.offsetTop - scroll < window.visualViewport.height * 0.6) {
      hdr.classList.add("underlined");
    } else {
      hdr.classList.remove("underlined");
    }
  });
}
window.addEventListener("scroll", scrollEvent);
scrollEvent();

// Countdowns
[...document.getElementsByClassName("countdown")].forEach((elem) => {
  const days = elem.children[0];
  const hours = elem.children[1];
  const minutes = elem.children[2];
  const update = () => {
    const diff = eventDate.valueOf() - Date.now(); // ms
    days.innerHTML = `${Math.floor(diff / 1000 / 60 / 60 / 24)}`;
    hours.innerHTML = `${Math.floor(diff / 1000 / 60 / 60) % 24}`;
    minutes.innerHTML = `${Math.floor(diff / 1000 / 60) % 60}`;
    setTimeout(update, 1000 * 60);
  };
  update();
});
