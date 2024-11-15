
document.addEventListener("DOMContentLoaded", () => {
    const profileSection = document.querySelector('.profile-section');
    profileSection.style.opacity = 0;
    profileSection.style.transition = 'opacity 1.5s ease-in-out';
    setTimeout(() => {
        profileSection.style.opacity = 1;
    }, 500);
});
