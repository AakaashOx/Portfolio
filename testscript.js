window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);

document.documentElement.style.setProperty("--initial-offset", "50rem");

function setScrollVar() {
  const htmlElement = document.documentElement;
  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight;

  // Limit scroll value between 0 and 100
  const scrollValue = Math.min(percentOfScreenHeightScrolled * 100, 100);

  console.log(scrollValue);
  htmlElement.style.setProperty("--scroll", scrollValue);
}

// Initialize on load
setScrollVar();


const observer = new IntersectionObserver(entries => {
  for (let i = entries.length - 1; i >= 0; i--) {
    const entry = entries[i]
    if (entry.isIntersecting) {
      document.querySelectorAll("[data-img]").forEach(img => {
        img.classList.remove("show")
      })
      const img = document.querySelector(entry.target.dataset.imgToShow)
      img?.classList.add("show")
      break
    }
  }
})

document.querySelectorAll("[data-img-to-show]").forEach(section => {
  observer.observe(section)
})




// Create the circle cursor element
const circleCursor = document.createElement('div');
circleCursor.classList.add('circle-cursor');
document.body.appendChild(circleCursor);

// Get the title image and pro3cover div
const titleimgEgov = document.querySelector('.titleimgEgov');
const pro3cover = document.querySelector('.pro3cover');

// Update cursor position and image visibility on mouse move within the pro3cover div
pro3cover.addEventListener('mousemove', (e) => {
  const rect = pro3cover.getBoundingClientRect(); // Get pro3cover dimensions and position

  // Calculate the mouse position within the pro3cover
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  // Ensure the cursor stays within the pro3cover boundaries
  if (mouseX >= 0 && mouseX <= rect.width && mouseY >= 0 && mouseY <= rect.height) {
    // Update cursor position within the bounds of pro3cover
    circleCursor.style.top = `${e.pageY - 88}px`; // Adjust circle center
    circleCursor.style.left = `${e.pageX - 130}px`;

    // Update the clip-path of the title image to reveal inside the circle
    titleimgEgov.style.clipPath = `circle(160px at ${mouseX}px ${mouseY}px)`;
    titleimgEgov.style.opacity = 1; // Make the image visible
  } else {
    // Hide cursor when mouse is out of bounds
    circleCursor.style.top = '-100rem'; // Move it off-screen
    circleCursor.style.left = '-100rem'; // Move it off-screen
  }
});


// Hide the title image and cursor when the mouse leaves the pro3cover area
pro3cover.addEventListener('mouseleave', () => {
  titleimgEgov.style.opacity = 0; // Hide the image
  titleimgEgov.style.clipPath = 'circle(0% at 50% 50%)'; // Reset clip-path

  // Hide cursor off-screen
  circleCursor.style.top = '-100rem';
  circleCursor.style.left = '-100rem';
});



let currentSlide = 0; // Start with the second slide for centering
const totalSlides = document.querySelectorAll('.apple-carousel-slide img').length;
const slideContainer = document.querySelector('.apple-carousel-slide');

// Define custom offsets for each slide
const slideOffsets = [0, 68, 137, 206, 275]; // Example offsets; adjust as needed

function showSlide(index) {
    // Ensure the index stays within bounds
    currentSlide = (index + totalSlides) % totalSlides; // Wrap around using modulo
    const offset = slideOffsets[currentSlide]; // Get the offset for the current slide
    slideContainer.style.transform = `translateX(-${offset}%)`; // Move to the correct slide

    updateSlideAppearance(currentSlide);
}

function updateSlideAppearance(index) {
    const images = document.querySelectorAll('.apple-carousel-slide img');

    images.forEach((img, i) => {
        if (i === index) {
            img.style.transform = 'scale(1.1)';
            img.style.opacity = '1';
        } else {
            img.style.transform = 'scale(1)';
            img.style.opacity = '0.5';
        }
    });
}

function nextSlide() {
    showSlide(currentSlide + 1); // Move to the next slide
}

function prevSlide() {
    showSlide(currentSlide - 1); // Move to the previous slide
}

// Initial setup
showSlide(currentSlide);



let currentSlide2 = 0; // Start with the second slide for centering
const totalSlides2 = document.querySelectorAll('.apple-carousel-slide2 img').length;
const slideContainer2 = document.querySelector('.apple-carousel-slide2');

// Define custom offsets for each slide
const slideOffsets2 = [0, 68, 137, 206, 275]; // Example offsets; adjust as needed

function showSlide2(index) {
    // Ensure the index stays within bounds
    currentSlide2 = (index + totalSlides2) % totalSlides2; // Wrap around using modulo
    const offset = slideOffsets2[currentSlide2]; // Get the offset for the current slide
    slideContainer2.style.transform = `translateX(-${offset}%)`; // Move to the correct slide

    updateSlideAppearance2(currentSlide2);
}

function updateSlideAppearance2(index) {
    const images = document.querySelectorAll('.apple-carousel-slide2 img');

    images.forEach((img, i) => {
        if (i === index) {
            img.style.transform = 'scale(1.1)';
            img.style.opacity = '1';
        } else {
            img.style.transform = 'scale(1)';
            img.style.opacity = '0.5';
        }
    });
}

function nextSlide2() {
    showSlide2(currentSlide2 + 1); // Move to the next slide
}

function prevSlide2() {
    showSlide2(currentSlide2 - 1); // Move to the previous slide
}

// Initial setup
showSlide2(currentSlide2);



let currentSlide3 = 0; // Start with the second slide for centering
const totalSlides3 = document.querySelectorAll('.apple-carousel-slide3 img').length;
const slideContainer3 = document.querySelector('.apple-carousel-slide3');

// Define custom offsets for each slide
const slideOffsets3 = [0, 68, 137, 206, 275]; // Example offsets; adjust as needed

function showSlide3(index) {
    // Ensure the index stays within bounds
    currentSlide3 = (index + totalSlides3) % totalSlides3; // Wrap around using modulo
    const offset = slideOffsets3[currentSlide3]; // Get the offset for the current slide
    slideContainer3.style.transform = `translateX(-${offset}%)`; // Move to the correct slide

    updateSlideAppearance3(currentSlide3);
}

function updateSlideAppearance3(index) {
    const images = document.querySelectorAll('.apple-carousel-slide3 img');

    images.forEach((img, i) => {
        if (i === index) {
            img.style.transform = 'scale(1.1)';
            img.style.opacity = '1';
        } else {
            img.style.transform = 'scale(1)';
            img.style.opacity = '0.5';
        }
    });
}

function nextSlide3() {
    showSlide3(currentSlide3 + 1); // Move to the next slide
}

function prevSlide3() {
    showSlide3(currentSlide3 - 1); // Move to the previous slide
}

// Initial setup
showSlide3(currentSlide3);

document.getElementById('movingImage1').addEventListener('click', function() {
  document.querySelector('.breaksec1').scrollIntoView({
      behavior: 'smooth' // Smooth scroll effect
  });
});

document.getElementById('movingImage2').addEventListener('click', function() {
  document.querySelector('.breaksec2').scrollIntoView({
      behavior: 'smooth' // Smooth scroll effect
  });
});

document.getElementById('movingImage3').addEventListener('click', function() {
  document.querySelector('.breaksec3').scrollIntoView({
      behavior: 'smooth' // Smooth scroll effect
  });
});