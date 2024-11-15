document.getElementById("name").addEventListener("click", function() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("contents").style.display = "block";
});

function showContent(contentId) {
    const contentDetail = document.getElementById("content-detail");
    document.getElementById("contents").style.display = "none";
    document.getElementById("detail").style.display = "block";

    switch(contentId) {
        case 1:
            contentDetail.textContent = "Major: Computer Science, Minor: Business";
            break;
        case 2:
            contentDetail.innerHTML = "<strong>Where I Worked:</strong><br>\
            Radiology Technician Assistant, National Fitness Center of Korea, Seoul, South Korea (Dec 2022 - May 2023)<br>\
            Social Service Personnel, KB Golden Life Care, Seoul, South Korea (Nov 2020 - Aug 2022)<br>\
            Treasurer, Korean Club, Knox College (Jan 2024 - Present)<br>\
            Volunteer, Blessing in Backpack, Knox College (Start month 2023 - Present)";
            break;
        case 3:
            contentDetail.textContent = "Creative and detail-oriented team player with a friendly demeanor, skilled in envisioning, researching, and designing effective strategies.";
            break;
        case 4:
            contentDetail.innerHTML = "<strong>Contact Info:</strong><br>\
            Changsun Lee<br>\
            Galesburg, IL<br>\
            (309) 832-2942<br>\
            chlee@knox.edu";
            break;
    }
}

function goBack() {
    document.getElementById("detail").style.display = "none";
    document.getElementById("contents").style.display = "block";
}

function goToIntro() {
    document.getElementById("contents").style.display = "none";
    document.getElementById("intro").style.display = "block";
}