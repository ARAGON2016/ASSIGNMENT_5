document.addEventListener("click", function () {
    const discoverButton = document.getElementById("discover-button");
    const backButton = document.getElementById("back-button");

    if (discoverButton) {
        discoverButton.addEventListener("click", function () {
            window.location.href = "ques.html"; 
        });
    }

    if (backButton) {
        backButton.addEventListener("click", function () {
            window.location.href = "index.html"; 
        });
    }
});
