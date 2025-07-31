document.addEventListener("DOMContentLoaded", function () {
    const rocket = document.querySelector(".rocket");

    rocket.addEventListener("mouseenter", () => {
        rocket.classList.add("fly");

        setTimeout(() => {
            rocket.classList.remove("fly");
        }, 2000);
    });
});
