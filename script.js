// 페이지가 로드될 때 이미지와 텍스트가 서서히 나타나는 효과
document.addEventListener("DOMContentLoaded", () => {
    const profileSection = document.querySelector('.profile-section');
    profileSection.style.opacity = 0;
    profileSection.style.transition = 'opacity 1.5s ease-in-out';
    setTimeout(() => {
        profileSection.style.opacity = 1;
    }, 500);
});
