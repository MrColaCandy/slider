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
};
rightBtn.onclick = (e) => {
  slider.scrollLeft -= slider.children[0].offsetWidth;
};
