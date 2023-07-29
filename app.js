// Nav bar

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Image gallery

const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const selectedImage = document.getElementById("selectedImage");
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const selectedIndex = null;

imageIndexes.forEach((i) => {
    const image = document.createElement("img");
    image.src = `/assets/images/${i}.jpg`;
    image.alt = `Bilde ${i} av mitt galleri`;
    image.classList.add("galleryImg");

    image.addEventListener("click", () => {
        // popup
        popup.style.transform = `translateY(0)`;
        selectedImage.src = `assets/images/${i}.jpg`;
        selectedImage.alt = `Bilde ${i} av mitt galleri`;

    });

    gallery.appendChild(image);
});

popup.addEventListener("click", () => {
    popup.style.transform = `translateY(-100%)`;
    popup.src = "";
    popup.alt = "";
});
