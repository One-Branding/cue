export default function alternateDataSrcLoad() {
  // wait for DOM and scripts to load
  window.addEventListener("load", () => {
    // Load videos only on desktop devices
    $(document).ready(function () {
      // Check screen size
      if ($(window).width() > 991) {
        // Find all iframes with data-src attribute
        $("[data-src]").each(function () {
          // Get the value of data-src attribute
          const dataSrc = $(this).attr("data-src");
          // Update the src attribute with the value of data-src
          $(this).attr("src", dataSrc);
          const parentEl = $(this).parent();
          const parentHTML = parentEl.html();
          // reset parent HTML equal to current HTML
          parentEl.html(parentHTML);
        });
      }
    });
  });
}
