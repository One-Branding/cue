export default function videoZoomGSAP() {
  // wait for DOM and scripts to load
  window.addEventListener("load", () => {
    $("[custom-video-section]").each(function () {
      let customVideoTl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: "25% bottom",
          end: "bottom bottom",
          markers: false,
          scrub: 3,
        },
      });
      customVideoTl.to($(this).find("[custom-video]"), {
        width: "100%",
        duration: 10,
      });
    });
  });
}
