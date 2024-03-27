export default function fadeInAnimation() {
  // wait for DOM and scripts to load
  window.addEventListener("load", () => {
    let typeSplit = new SplitType("[animate-line]", {
      types: "lines, words, chars",
      tagName: "span",
    });

    $("[animate-line='load'] .line").each(function () {
      gsap.to($(this), {
        opacity: 1,
        duration: 1.5,
        ease: "power1.out",
        stagger: 0.15,
      });
    });

    $("[animate-line='scroll'] .line").each(function () {
      gsap.to($(this), {
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        stagger: 0.15,

        scrollTrigger: {
          trigger: $(this),
          start: "top 80%",
        },
      });
    });

    $("[animate='load']").each(function () {
      gsap.to($(this), {
        opacity: 1,
        duration: 1.5,
        ease: "power1.out",
        stagger: 0.15,
      });
    });

    $("[animate='scroll']").each(function () {
      gsap.to($(this), {
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        stagger: 0.15,

        scrollTrigger: {
          trigger: $(this),
          start: "top 80%",
        },
      });
    });
  });
}
