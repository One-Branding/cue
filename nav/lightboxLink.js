export default function lightboxLink() {
  // wait for DOM and scripts to load
  window.addEventListener("load", () => {
    // Select all Lightbox links and on click close the dropdown menu
    document.querySelectorAll(".nav__lightbox-link").forEach((el) => {
      el.addEventListener("click", () => {
        document.querySelector(".nav__dropdown-link.w--open").click();
      });
    });
  });
}
