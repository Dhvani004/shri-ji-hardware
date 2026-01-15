/* ================= PRODUCT FILTER ================= */
function filterProducts(category, btn) {
    let products = document.getElementsByClassName("product-card");
    let buttons = document.querySelectorAll(".filter-buttons button");

    // remove active from all buttons
    buttons.forEach(b => b.classList.remove("active"));

    // add active to clicked button
    if (btn) btn.classList.add("active");

    for (let i = 0; i < products.length; i++) {
        if (category === "all") {
            products[i].style.display = "block";
        } else if (products[i].classList.contains(category)) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}


/* ================= WHY CHOOSE US (STAGGER) ================= */
const whySection = document.querySelector(".why-us");

if (whySection) {
    const whyObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cards = entry.target.querySelectorAll(".why-card");

                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add("show");
                    }, index * 200);
                });

                whyObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    whyObserver.observe(whySection);
}


/* ================= ABOUT & VISIT ================= */
const simpleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            simpleObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".about-box, .visit-box")
    .forEach(el => simpleObserver.observe(el));


/* ================= WHATSAPP CONTACT FORM ================= */
function sendWhatsAppMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const phone = document.getElementById("phone")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    if (!name || !phone || !message) {
        alert("Please fill all fields");
        return;
    }

    // Indian phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number");
        return;
    }

    const whatsappNumber = "918826496613"; // your number (no +)

    const text =
        `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    // reset form
    event.target.reset();
}



function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    const overlay = document.getElementById("menu-overlay");

    menu.classList.toggle("show");
    overlay.classList.toggle("show");
}

function closeMenu() {
    const menu = document.getElementById("nav-menu");
    const overlay = document.getElementById("menu-overlay");

    menu.classList.remove("show");
    overlay.classList.remove("show");
}

/* Close menu when any nav link is clicked */
document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", closeMenu);
});

