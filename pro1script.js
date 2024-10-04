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

document.documentElement.style.setProperty("--initial-offset", "50rem");

function setScrollVar() {
  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight
  console.log(Math.min(percentOfScreenHeightScrolled * 100, 150))
  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percentOfScreenHeightScrolled * 100, 150)
  )

  const threeDScrollValue = Math.min(percentOfScreenHeightScrolled * 110, 500);
  htmlElement.style.setProperty("--3d1scroll", threeDScrollValue);

  const threetwoDScrollValue = Math.min(percentOfScreenHeightScrolled * 80, 800);
  htmlElement.style.setProperty("--3d2scroll", threetwoDScrollValue);
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

document.querySelectorAll("[data-img-to-show]").forEach(section => {
  observer.observe(section)
})

const video = document.querySelector('.video-box');
  video.playbackRate = 1.5;

const video2 = document.querySelector('.video-box2');
  video2.playbackRate = 1.5;