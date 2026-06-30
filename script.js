// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);
    }

});

// =========================
// SCROLL PROGRESS BAR
// =========================

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    const progressBar =
        document.getElementById("progress-bar");

    if(progressBar){
        progressBar.style.width =
        progress + "%";
    }

});

// =========================
// SMOOTH SCROLL
// =========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// =========================
// DARK / LIGHT MODE
// =========================

const themeBtn =
document.getElementById("theme-toggle");

if(themeBtn){

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const icon =
        themeBtn.querySelector("i");

        if(
            document.body.classList.contains(
                "light-mode"
            )
        ){

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

        }else{

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

        }

    });

}

// =========================
// ACTIVE NAV LINKS
// =========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if(
            pageYOffset >= sectionTop
        ){
            current =
            section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href") ===
            "#" + current
        ){
            link.classList.add("active");
        }

    });

});

// =========================
// SCROLL ANIMATION
// =========================

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add(
                "show"
            );

        }

    });

},{
    threshold:0.15
});

document
.querySelectorAll(
'.service-card, .project-card, .glass-card'
)
.forEach(card => {

    card.classList.add("hidden");

    observer.observe(card);

});

// =========================
// CONTACT FORM
// =========================

const contactForm =
document.querySelector("form");

if(contactForm){

    contactForm.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        alert(
        "Thank you! Your request has been submitted successfully."
        );

        this.reset();

    });

}

// =========================
// BUTTON HOVER EFFECT
// =========================

const buttons =
document.querySelectorAll(
".btn, button"
);

buttons.forEach(btn => {

    btn.addEventListener(
    "mouseenter",
    () => {

        btn.style.transform =
        "translateY(-4px)";

    });

    btn.addEventListener(
    "mouseleave",
    () => {

        btn.style.transform =
        "translateY(0px)";

    });

});

// =========================
// CONSOLE BRANDING
// =========================

console.log(
"%cMeet Goswami Website",
"font-size:24px;color:#2563eb;font-weight:bold;"
);

console.log(
"%cWebsite Upgrade & Modernization Services",
"font-size:14px;color:#7c3aed;"
);
