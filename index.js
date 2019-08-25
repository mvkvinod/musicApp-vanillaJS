window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const musicPad = document.querySelectorAll(" .musicPad div");
  const visuals = document.querySelector(" .visuals");
  const color = [
    "#3b80f0",
    "#4258f4",
    "#5f38e6",
    "#771fc5",
    "#7b0b9b",
    "#6b0686"
  ];
  // Getting the sound

  musicPad.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();

      colorPopUp(index);
    });
  });

  // color pop up
  const colorPopUp = index => {
    const pop = document.createElement("div");
    visuals.appendChild(pop);
    pop.style.backgroundColor = color[index];
    pop.style.animation = "jump 1s ease";
    pop.addEventListener("animationend", function() {
      visuals.removeChild(this);
    });
  };
});
