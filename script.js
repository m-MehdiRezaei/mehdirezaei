// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class "code-explanation"
    var codeExplanations = document.getElementsByClassName('code-explanation');

    // Initially hide all code explanations
    for (var i = 0; i < codeExplanations.length; i++) {
        codeExplanations[i].style.display = "none";
    }
});

function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    var codes = section.getElementsByClassName('code-explanation');

    for (var i = 0; i < codes.length; i++) {
        if (codes[i].style.display === "none" || codes[i].style.display === "") {
            codes[i].style.display = "block";
        } else {
            codes[i].style.display = "none";
        }
    }
}

function showHTML() {
    window.location.href = 'index.html'; // Redirect to the HTML cheatsheet
}

function showCSS() {
    window.location.href = 'css-index.html'; // Redirect to the CSS cheatsheet
}

function showJS() {
    window.location.href = 'myPage.html'; // Redirect to the JS cheatsheet
}