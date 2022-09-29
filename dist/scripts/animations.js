const splashAnimation = async () => {
  //begin animation timeline
  const timeline = anime.timeline();
  //drawing SVG
  timeline.add({
    targets: ".drawing .lines path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1500,
    delay: function (el, i) {
      return i * 250;
    },
  });
  //showing quote line
  timeline.add({
    targets: ".quote-line",
    opacity: "1",
    duration: 400,
    easing: "linear",
  });
  //growing and fading
  timeline.add({
    targets: [".logo"],
    opacity: "0",
    delay: 200,
    height: "80%",
    width: "80%",
    duration: 400,
    easing: "easeInOutQuint",
  });
  //fading splash screen
  timeline.add({
    targets: [".splash-screen"],
    opacity: 0,
    duration: 400,
    easing: "easeInOutQuint",
  });
  //end of animation timeline
  await timeline.finished;
  ///removing splash screen
  document.querySelector(".splash-screen ").remove();
};

const showMenu = () => {
  const timeline = anime.timeline();
  timeline.add({
    targets: ".nav-list ",
    height: [0, 230],
    easing: "easeInOutCubic",
    duration: 300,
  });
};
const hideMenu = () => {
  const timeline = anime.timeline();
  timeline.add({
    targets: ".nav-list ",
    height: [230, 0],
    easing: "easeInOutCubic",
    duration: 300,
  });
};

export { splashAnimation, showMenu, hideMenu };
