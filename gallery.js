let slideIndex = 0;
const slides = document.getElementsByClassName('slide');

function showSlides() {
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the current slide
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Slide change interval (4 seconds)
}

function moveSlide(n) {
  slideIndex += n;
  if (slideIndex > slides.length) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

// Initialize slide show
showSlides();