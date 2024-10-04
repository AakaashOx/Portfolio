let lastKnownScrollPosition = 0;
let ticking = false;

window.addEventListener('scroll', function() {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      setScrollVar(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});

// Example: Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight

  console.log(Math.min(percentOfScreenHeightScrolled * 100, 150))

  htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 150))

  const threeDScrollValue = Math.min(percentOfScreenHeightScrolled * 150, 150);
  htmlElement.style.setProperty("--3dscroll", threeDScrollValue);

  const fourDScrollValue = Math.min(percentOfScreenHeightScrolled * 150, 30);
  htmlElement.style.setProperty("--4dscroll", fourDScrollValue);
}

setScrollVar()

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


window.addEventListener('scroll', function() {
  const allImages = [
    { selector: '.imgtype1', baseSpeed: 15, offsetStart: 5 },
    { selector: '.imgtype2', baseSpeed: 8, offsetStart: 10 },
    { selector: '.imgtype3', baseSpeed: 12, offsetStart: 15 },
    { selector: '.imgtype4', baseSpeed: 14,  offsetStart: 25 }
  ];
  
  const scrollValue = window.scrollY;

  // Loop through each image type configuration for parallax effect
  allImages.forEach((imageConfig) => {
    const images = document.querySelectorAll(imageConfig.selector);
    
    images.forEach((img, index) => {
      const speed = 0.2 + (index * 0.1); // Adjust speed for different images
      const yOffset = scrollValue * speed;

      // Move the image vertically using transform
      img.style.transform = `translateY(${imageConfig.offsetStart + (-(yOffset / imageConfig.baseSpeed))}%)`;
    });
  });

});


window.addEventListener('scroll', function() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  const boxIndicator = document.querySelector('.box-ind');
  const scrollThreshold = 1100;
  const boxThreshold = 1000;
  const boxThreshold2 = 3000;

  // For scrollIndicator movement
  if (window.scrollY <= scrollThreshold) {
    const translateYValue = Math.max(350 - window.scrollY / 3, 0); 
    scrollIndicator.style.transform = `translateY(${translateYValue}%)`;
    scrollIndicator.style.transition = `transform 0.01s ease-out`;
  } else {
    scrollIndicator.style.transform = 'translateY(-0%)';
    scrollIndicator.style.transition = `transform 0.5s ease-out`; 
  }

  // For boxIndicator movement between boxThreshold and boxThreshold2
  if (window.scrollY <= boxThreshold) {
    const translateYValue2 = Math.max(-50 - window.scrollY / 3, -50);
    boxIndicator.style.opacity = `0`;
    boxIndicator.style.transform = `translateY(${translateYValue2}%)`;
  } else if (window.scrollY > boxThreshold && window.scrollY <= boxThreshold2) {
    const translateYValue3 = -55 + (window.scrollY - boxThreshold) * 1.13; 
    boxIndicator.style.transform = `translateY(${translateYValue3}px)`;
    boxIndicator.style.opacity = `1`;
  } else {
    boxIndicator.style.transform = `translateY(${(boxThreshold2 - boxThreshold) * 1.099}px)`; 
    boxIndicator.style.opacity = `1`;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const slideInSection = document.querySelector('.msgSection');
  
  window.addEventListener('scroll', function () {
    const sectionTop = slideInSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.1;
    
    if (sectionTop < triggerPoint) {
      slideInSection.classList.add('slide-up');
    }else{
      slideInSection.classList.remove('slide-up');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const slideInSection = document.querySelector('.hdmsgSection');
  
  window.addEventListener('scroll', function () {
    const sectionTop = slideInSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.3;
    
    if (sectionTop < triggerPoint) {
      slideInSection.classList.add('slide-up');
    }else{
      slideInSection.classList.remove('slide-up');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const slideInSections = document.querySelectorAll('.fontimgDesc');
  
  window.addEventListener('scroll', function () {
    const triggerPoint = window.innerHeight / 1.3;
    
    slideInSections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      
      if (sectionTop < triggerPoint) {
        section.classList.add('slide-up');
      } else {
        section.classList.remove('slide-up');
      }
    });    
  });
});

const images = document.querySelectorAll('.hover-image');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  images.forEach(image => {
    // Get image's position relative to the viewport
    const rect = image.getBoundingClientRect();
    const imageX = (rect.left + rect.right) / 2;
    const imageY = (rect.top + rect.bottom) / 2;

    // Calculate the distance from the mouse pointer to the image
    const diffX = mouseX - imageX;
    const diffY = mouseY - imageY;
    const distance = Math.sqrt(diffX * diffX + diffY * diffY);

    // Set a movement range based on the distance (the closer, the bigger the move)
    const movement = Math.min(5, 50 / distance); // Adjust the range as needed

    // Move the image away from the cursor
    image.style.transform = `translate(${diffX * -movement}px, ${diffY * -movement}px)`;
  });
});
