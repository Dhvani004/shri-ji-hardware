/* ================= PRODUCT FILTER ================= */
function filterProducts(category) {
    let products = document.getElementsByClassName("product-card");
    let buttons = document.querySelectorAll(".filter-buttons button");

    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

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

whyObserver.observe(document.querySelector(".why-us"));

/* ================= ABOUT & VISIT (NORMAL) ================= */
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



function sendWhatsAppMessage(event) {
    event.preventDefault(); // stop page reload

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const successMsg = document.getElementById("successMsg");

    // 📱 PHONE VALIDATION (10 digits only)
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit Indian phone number");
        return;
    }

    const whatsappNumber = "918826496613"; // 🔴 YOUR NUMBER (NO +)

    const text =
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Message: ${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    // ✅ SUCCESS MESSAGE
    successMsg.style.display = "block";

    // 🔄 RESET FORM
    event.target.reset();

    // ⏱ Hide success message after 3 seconds
    setTimeout(() => {
        successMsg.style.display = "none";
    }, 3000);
}
