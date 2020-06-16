let indice = 1;
showSlide(indice);
showBox(indice);
function avanzaSlide(n) {
  this.showBox((indice += n));
}
function position(n) {
  this.showSlide((indice = n));
}
setInterval(() => {
  this.showBox((indice += 1));
}, 10000);

function showSlide(n) {
  let slides = document.getElementsByClassName("testimonies-grill");
  let barras = document.getElementsByClassName("test-slider-box-circle");
  let i;
  if (n > slides.length) {
    indice = 1;
  }
  if (n < 1) {
    indice = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < barras.length; i++) {
    barras[i].className = barras[i].className.replace("active", "");
  }
  slides[indice - 1].style.display = "grid";
  barras[indice - 1].className += " active";
}
function showBox(n) {
  let slides = document.getElementsByClassName("benefits-grill");
  let i;
  if (n > slides.length) {
    indice = 1;
  }
  if (n < 1) {
    indice = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[indice - 1].style.display = "grid";
}
