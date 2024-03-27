export default function disablePageScrolling() {
  // wait for DOM and scripts to load
  window.addEventListener("load", () => {
    // Get the button by its attribute selector
    const navMenuButton = document.querySelector("[data-nav-menu-button]");
    // Add a click event listener to the button
    navMenuButton.addEventListener("click", () => {
      // Toggle the overflow property on the body
      document.body.style.overflow =
        document.body.style.overflow === "hidden" ? "auto" : "hidden";
    });
  });
}
