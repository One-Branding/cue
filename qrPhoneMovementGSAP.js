export default function qrPhoneMovementGSAP() {
  //wait for DOM and scripts to load
  window.addEventListener("load", () => {
    $("[section-qr-code]")?.each(function () {
      let phoneQrAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: "top 50%",
          end: "bottom bottom",
          markers: false,
          scrub: 5,
        },
      });
      phoneQrAnimation.fromTo(
        $(this).find("[qr-dark-phone]"),
        {
          y: 100,
        },
        {
          y: -0,
          duration: 5,
        }
      );
    });
  });
}
