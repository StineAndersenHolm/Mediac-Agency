const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelectorAll(".content");
const section = document.querySelectorAll("section");
const image_container = document.querySelectorAll(".imgcontainer");
/* const opacity = document.querySelectorAll(".opacity"); */
/* const border = document.querySelector(".border"); */

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset;
  /* let sectionY = section.getBoundingClientRect();
 */
  translate.forEach(element => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });

  /* opacity.forEach(element => {
    element.style.opacity = scroll / (sectionY.top + section_height);
  }) */

  big_title.style.opacity = - scroll / (header_height / 2) + 1;
  shadow.style.height = `${scroll * 0.5 + 300}px`;


  /* border.style.width = `${scroll / (sectionY.top + section_height) * 60}%`; */
})
 

window.onscroll =
function(){
    let blooper = document.getElementById("myVideo");

    if(blooper.getBoundingClientRect().bottom < 200 || blooper.getBoundingClientRect().top > 250)
        blooper.pause();
    else
    blooper.play();
}

function elFllVsbl(el) {
  return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}

/* var elementet = document.getElementById("myVideo");

window.addEventListener("scroll", function() {

  if (elFllVsbl(elementet)) {
    console.log("play video");
    elementet.play(); // with player you can manipulate the video
  } else {
    console.log("pause video")
    elementet.pause();
  }
}); // end eventlistener */

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
    
  };
  window.requestAnimationFrame(step);
}

window.addEventListener("scroll", function(){
const obj = document.getElementById("value");
if (elFllVsbl(obj))
animateValue(obj, 0, 85, 2000);

});

window.addEventListener("scroll", function(){
  const obj1 = document.getElementsByClassName("border");
  if (elFllVsbl(obj1))
  obj1.style.width="300px";
  
  });

