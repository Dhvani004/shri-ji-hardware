/* ================= PRODUCT FILTER ================= */
function filterProducts(category) {
    let products = document.getElementsByClassName("product-card");

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
