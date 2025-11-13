    const ham = document.querySelector(".hamburger");
    const menu = document.querySelector(".mobile-menu");

    ham.addEventListener("click", () => {
        menu.classList.toggle("active");
        ham.classList.toggle("open");
    });