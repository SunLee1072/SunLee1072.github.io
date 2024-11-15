// 이름을 클릭하면 메인 콘텐츠로 이동하는 함수
document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("name");
    const intro = document.getElementById("intro");
    const content = document.getElementById("content");
    const backButton = document.getElementById("back-button");

    // 이름을 클릭하면 콘텐츠 화면으로 전환
    nameElement.addEventListener("click", () => {
        intro.classList.add("hidden");

        // 1초 후에 intro를 숨기고 content를 표시
        setTimeout(() => {
            intro.style.display = "none";
            content.style.display = "block";
            document.body.style.overflow = "auto"; // 스크롤 활성화
        }, 1000);
    });

    // 돌아가기 버튼 클릭 시 첫 화면으로 복귀
    backButton.addEventListener("click", () => {
        content.style.display = "none";
        intro.style.display = "flex";
        intro.classList.remove("hidden");
        document.body.style.overflow = "hidden"; // 스크롤 비활성화
    });
});
