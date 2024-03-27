function numberWithZero(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

//after window is loaded completely Good to go
window.onload = function () {
  //hide the preloader select onlt if preloader is on the screen
  document.querySelector(".preloader")?.classList.add("cc-loaded");
};

/*/////////////////////////*/
/*///////Custom Tabs///////*/
/*/////////////////////////*/
const tabLinks = document.querySelectorAll(".tab-link"); // Adjust selector as needed
const tabContents = document.querySelectorAll(".tab-content"); // Adjust selector as needed

// Add event listener to each tab link
tabLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    const setTab = () => {
      // Deactivate all tabs
      tabContents.forEach((content) => content.classList.remove("active"));
      tabLinks.forEach((link) => link.classList.remove("active"));

      clickedTabContent.classList.add("active");
      clickedTab.classList.add("active");

      // Add ARIA attributes for accessibility
      clickedTab.setAttribute("aria-selected", "true");
      clickedTabContent.setAttribute("aria-hidden", "false");
    };

    // Activate the clicked tab
    const clickedTab = event.target;
    const clickedTabContent = document.querySelector(
      `.tab-content[data-tab="${clickedTab.dataset.tab}"]`
    ); // Example of targeting based on data attribute

    // If the window is less than 991px allow the user to close the tab
    if (window.innerWidth < 991) {
      if (clickedTab.classList.contains("active")) {
        clickedTabContent.classList.remove("active");
        clickedTab.classList.remove("active");
      } else {
        setTab();
      }
    } else {
      setTab();
    }
  });
  // If the window is less than 991px remove from all tab links and tab content
  if (window.innerWidth < 991) {
    tabContents.forEach((content) => content.classList.remove("active"));
    tabLinks.forEach((link) => link.classList.remove("active"));
  }
});
