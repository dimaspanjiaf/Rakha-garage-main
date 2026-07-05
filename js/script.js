// ===============================
// RAKHA GARAGE PREMIUM JAVASCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", () => {

// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

const navbar = document.querySelector(".sidebar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(0,0,0,0.95)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";

    } else {

        navbar.style.background = "rgba(0,0,0,0.85)";
        navbar.style.boxShadow = "none";

    }
});

// ==========================
// COUNTER ANIMATION
// ==========================



// ==========================
// REVEAL ON SCROLL
// ==========================

const reveals = document.querySelectorAll(
    ".car-card, .about-content, .gallery-grid img, .stat-box"
);

function revealElements() {

    const trigger =
        window.innerHeight - 100;

    reveals.forEach(element => {

        const top =
            element.getBoundingClientRect().top;

        if (top < trigger) {

            element.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    revealElements
);

revealElements();

const statBoxes = document.querySelectorAll(".stat-box");

const statObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const box = entry.target;

            box.querySelector(".car-icon").classList.add("show");
            box.querySelector("h2").classList.add("show");
            box.querySelector("p").classList.add("show");

            setTimeout(() => {
                startCounter(box.querySelector("h2"));
            }, 1300);

            statObserver.unobserve(box);

        }

    });

}, {
    threshold: 0.5
});

statBoxes.forEach(box => {
    statObserver.observe(box);
});

function startCounter(counter){

    const target = parseInt(counter.textContent);

    let current = 0;

    const increment = Math.ceil(target / 80);

    const timer = setInterval(() => {

        current += increment;

        if(current >= target){

            current = target;
            clearInterval(timer);

        }

        counter.textContent = current + "+";

    },20);

}

setTimeout(()=>{

    startCounter(box.querySelector("h2"));

},1300);
// ==========================
// SMOOTH SCROLL
// ==========================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }
        );

    });

// ==========================
// BACK TO TOP BUTTON
// ==========================

const backBtn =
    document.createElement("button");

backBtn.innerHTML = "↑";

backBtn.id = "backToTop";

document.body.appendChild(backBtn);

backBtn.style.position = "fixed";
backBtn.style.right = "25px";
backBtn.style.bottom = "25px";
backBtn.style.width = "50px";
backBtn.style.height = "50px";
backBtn.style.borderRadius = "50%";
backBtn.style.border = "none";
backBtn.style.cursor = "pointer";
backBtn.style.background = "#C9A227";
backBtn.style.color = "#000";
backBtn.style.fontSize = "22px";
backBtn.style.display = "none";
backBtn.style.zIndex = "9999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backBtn.style.display = "block";

    } else {

        backBtn.style.display = "none";

    }

});

backBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ==========================
// CAR MODAL
// ==========================

const cards =
    document.querySelectorAll(".car-card");

const modal =
    document.createElement("div");

modal.classList.add("modal");

modal.innerHTML = `
    <div class="modal-content">
        <span class="close-modal">&times;</span>

        <h2 id="modalTitle"></h2>

        <p>
            Exclusive luxury vehicle available
            in Rakha Garage collection.
        </p>

        <button class="btn-gold">
            Book Viewing
        </button>
    </div>
`;

document.body.appendChild(modal);

cards.forEach(card => {

    card.addEventListener("click", () => {

        const title =
            card.querySelector("h3").innerText;

        document.getElementById(
            "modalTitle"
        ).innerText = title;

        modal.style.display = "flex";

    });

});

document
    .querySelector(".close-modal")
    .addEventListener("click", () => {

        modal.style.display = "none";

    });

window.addEventListener("click", e => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});


});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});
