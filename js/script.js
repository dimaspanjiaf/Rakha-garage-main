document.addEventListener("DOMContentLoaded", () => {
  // ======================
  // LOADER
  // ======================

  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {
      loader.remove();
    }, 800);
  });

  // ======================
  // TYPING EFFECT
  // ======================

  const typingTarget = document.getElementById("typing");

  if (typingTarget) {
    const words = [
  "Koleksi Mobil Premium",
  "Showroom Mewah",
  "Mobil Klasik Pilihan",
  "Pengalaman Eksklusif"
];

    let wordIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < words[wordIndex].length) {
        typingTarget.textContent += words[wordIndex][charIndex];

        charIndex++;

        setTimeout(type, 100);
      } else {
        setTimeout(erase, 2000);
      }
    }

    function erase() {
      if (charIndex > 0) {
        typingTarget.textContent = words[wordIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(erase, 50);
      } else {
        wordIndex++;

        if (wordIndex >= words.length) {
          wordIndex = 0;
        }

        setTimeout(type, 500);
      }
    }

    type();
  }

  // ======================
  // SMOOTH SCROLL
  // ======================

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      target.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // ======================
  // ACTIVE NAVBAR
  // ======================

  const sections = document.querySelectorAll("section");

  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;

      if (window.scrollY >= sectionTop) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // ======================
  // NAVBAR SCROLL EFFECT
  // ======================

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(0,0,0,.98)";

      navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,.5)";
    } else {
      navbar.style.background = "rgba(0,0,0,.85)";

      navbar.style.boxShadow = "none";
    }
  });

  // ======================
  // REVEAL ON SCROLL
  // ======================

  const reveals = document.querySelectorAll(
    ".car-card, .testimonial-card, .about-wrapper, .contact-card",
  );

  function revealElements() {
    reveals.forEach((item) => {
      const top = item.getBoundingClientRect().top;

      const trigger = window.innerHeight - 100;

      if (top < trigger) {
        item.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealElements);

  revealElements();

  // ======================
  // PARALLAX HERO
  // ======================

  const hero = document.querySelector(".hero");

  window.addEventListener("scroll", () => {
    let offset = window.pageYOffset;

    hero.style.backgroundPositionY = offset * 0.5 + "px";
  });

  // ======================
  // CARD TILT EFFECT
  // ======================

  const cards = document.querySelectorAll(".car-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;

      const y = e.clientY - rect.top;

      const rotateY = (x - rect.width / 2) / 15;

      const rotateX = -(y - rect.height / 2) / 15;

      card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-5px)
                `;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                `;
    });
  });

  // ======================
  // CURSOR GLOW
  // ======================

  const glow = document.querySelector(".cursor-glow");

  document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";
  });

  // ======================
  // BACK TO TOP
  // ======================

  const backBtn = document.createElement("button");

  backBtn.id = "backToTop";

  backBtn.innerHTML = "↑";

  document.body.appendChild(backBtn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backBtn.style.display = "block";
    } else {
      backBtn.style.display = "none";
    }
  });

  backBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
const searchInput =
document.getElementById("searchInput");

const carCards =
document.querySelectorAll(".car-card");

if(searchInput){

    searchInput.addEventListener("keyup",()=>{

        const keyword =
        searchInput.value.toLowerCase();

        carCards.forEach(card=>{

            const title =
            card.querySelector("h3")
            .textContent
            .toLowerCase();

            if(title.includes(keyword)){

                card.style.display="block";

            }else{

                card.style.display="none";

            }

        });

    });
}
// ======================
// FILTER CATEGORY
// ======================

const filterButtons =
document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter =
        button.dataset.filter;

        carCards.forEach(card => {

            if (
                filter === "all" ||
                card.classList.contains(filter)
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});