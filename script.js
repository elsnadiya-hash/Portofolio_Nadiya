document.addEventListener("DOMContentLoaded", () => {

  /* ===== FADE ANIMATION ON SCROLL ===== */
  const faders = document.querySelectorAll('.fade');

  const revealOnScroll = () => {
    faders.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 120) {
        el.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  /* ===== LIGHTBOX ===== */
  const images = document.querySelectorAll("img[data-description]");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxDesc = document.getElementById("lightbox-desc");

  if (lightbox && lightboxImg && lightboxDesc) {

    // klik gambar → buka lightbox
    images.forEach(img => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        lightboxDesc.textContent = img.dataset.description;
      });
    });

    // klik background gelap → tutup
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  }

  /* ===== ITEM CAROUSEL (dalam setiap frame) ===== */
  const itemCarousels = document.querySelectorAll('.item-carousel');

  itemCarousels.forEach(carousel => {
    const track = carousel.querySelector('.item-carousel-track');
    const window = carousel.querySelector('.item-carousel-window');
    const btn = carousel.querySelector('.item-carousel-btn');
    let currentSlide = 0;

    if (track && btn) {
      const slides = track.querySelectorAll('img').length;

      btn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
      });
    }
  });

});