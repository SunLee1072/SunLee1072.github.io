
document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("name");
    const intro = document.getElementById("intro");
    const content = document.getElementById("content");

    nameElement.addEventListener("click", () => {

        intro.classList.add("hidden");


        setTimeout(() => {
            intro.style.display = "none";
            content.style.display = "block";
            document.body.style.overflow = "auto"; 
        }, 1000);
    });
});
