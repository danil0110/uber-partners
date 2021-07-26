const menu = document.querySelector(".menu"),
    hamburgerBtn = document.querySelector(".hamburger"),
    menuLinks = menu.querySelectorAll(".menu_link");

document.body.addEventListener(
    "click",
    (e) => {
        if (e.target === hamburgerBtn || e.target.tagName === "SPAN") {
            return;
        }

        if (e.target !== menu) {
            closeMenu();
        }
    },
    true
);

hamburgerBtn.addEventListener("click", toggleMenu);

menuLinks.forEach((item) => {
    item.addEventListener("click", closeMenu);
});

function toggleMenu() {
    menu.classList.toggle("menu_active");
    hamburgerBtn.classList.toggle("hamburger_active");
}

function openMenu() {
    menu.classList.add("menu_active");
    hamburgerBtn.classList.add("hamburger_active");
}

function closeMenu() {
    menu.classList.remove("menu_active");
    hamburgerBtn.classList.remove("hamburger_active");
}
