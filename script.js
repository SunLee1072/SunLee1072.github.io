
    document.getElementById("name").addEventListener("click", function() {
        document.getElementById("intro").style.display = "none";
        document.getElementById("contents").style.display = "block";
    });

    function showContent(contentId) {
        alert('Contents ' + contentId + ' clicked!');
        // Here you can add further logic to display the content in detail
    }
