const left = document.getElementById("left");
const right = document.getElementById("right");
let icon = document.getElementById("active2");
let login_register = document.getElementsByClassName("active1");

let userid = false;
let slideIndex = 1;

showSlides(slideIndex);

left.addEventListener("click", () => showSlides((slideIndex -= 1)));
right.addEventListener("click", () => showSlides((slideIndex += 1)));

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
  
    if (n > slides.length) {
      slideIndex = 1;
    }
  
    if (n < 1) {
      slideIndex = slides.length;
    }
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    slides[slideIndex - 1].style.display = "block";
}

if (!userid) {
    icon.hidden = true;
  } else {
    login_register[0].hidden = true;
    login_register[1].hidden = true;
  }
  

