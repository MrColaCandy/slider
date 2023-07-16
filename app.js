var slides = [
  {
    tittle: "Slide One",
    context: "This is slide one context.",
    image: "./images/0.jpg",
  },
  {
    tittle: "Slide Two",
    context: "This is slide two context.",
    image: "./images/1.jpg",
  },
  {
    tittle: "Slide Three",
    context: "This is slide three context.",
    image: "./images/2.jpg",
  },
];

var slider = document.getElementById("slider");

slides.forEach((s) => {
  var slide = document.createElement("div");
  slide.className = "slide";
  slide.style.backgroundImage = `url('${s.image}')`;
  slide.innerHTML = `<div><h1>${s.tittle}</h1><p>${s.context}</p></div>`;
  slider.append(slide);
});

var leftBtn = document.getElementById("left-btn");
var rightBtn = document.getElementById("right-btn");

leftBtn.onclick = (e) => {
  slider.scrollLeft += slider.children[0].offsetWidth;
  timer = 0;
};
rightBtn.onclick = (e) => {
  slider.scrollLeft -= slider.children[0].offsetWidth;
  timer = 0;
};

var body = document.body;
var pos = { mouseX: 0, scrollX: 0 };
var isDragging = false;
body.addEventListener("mousedown", (e) => {
  pos.mouseX = e.clientX;
  pos.scrollX = slider.scrollLeft;
  isDragging = true;
});

body.addEventListener("mousemove", (e) => {
  e.preventDefault();
  if (!isDragging) return;
  timer = 500;
  const dx = e.clientX - pos.mouseX;
  if (dx > 0) slider.scrollLeft -= slider.children[0].offsetWidth;
  else slider.scrollLeft += slider.children[0].offsetWidth;
});

body.addEventListener("mouseup", () => {
  isDragging = false;
});

var timer = 500;
var isForward = true;
setInterval(() => {
  timer--;
  if (slider.scrollLeft == slider.scrollWidth - slider.clientWidth) {
    isForward = false;
    leftBtn.style.opacity = 0;
  } else if (slider.scrollLeft == 0) {
    isForward = true;
    rightBtn.style.opacity = 0;
  } else {
    rightBtn.style.opacity = 1;
    leftBtn.style.opacity = 1;
  }

  if (timer <= 0) {
    timer = 500;

    if (isForward) {
      slider.scrollLeft += slider.children[0].offsetWidth;
    } else {
      slider.scrollLeft -= slider.children[0].offsetWidth;
    }
  }
}, 10);
