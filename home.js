const heroTextArea = document.getElementById("hero-text-area");
const blogArea = document.getElementById("blog-area");
const onloadOnlyElements = document.getElementById("onload-only-elements");
const hiText = document.getElementById("hi-text");
// const animatedTexts = document.getElementsByClassName("animated-text");
// const loadTextAnimationArea = document.getElementById("load-text-animation-area");

window.addEventListener('load', function() {
    // document.documentElement.style.filter = "grayscale(100%)";
    // heroTextArea.style.opacity = "0%";
    // blogArea.style.opacity = "0%";
    heroTextArea.style.display = "none";
    blogArea.style.display = "none";
    //loadTextAnimationArea.display = "none";
    onloadOnlyElements.style.display = "block";
})

hiText.addEventListener("click", function() {
    heroTextArea.style.display = "block";
    blogArea.style.display = "block";
    onloadOnlyElements.style.display = "none";
    //document.documentElement.style.filter = "grayscale(0%)";
    // loadTextAnimationArea.display ="block";

    // for(const text of animatedTexts) {
    //     text.style.animationPlayState = "running";
    // }

    document.documentElement.animate({filter: `grayscale(0%)`}, 
        {duration:2000, fill: "forwards"});

    
    heroTextArea.animate({opacity: "100%"},
        {duration:1500, fill: "forwards"});

    blogArea.animate({opacity: "100%"},
        {duration:1500, fill: "forwards"});
});