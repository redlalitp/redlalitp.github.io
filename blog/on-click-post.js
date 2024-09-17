const posts = document.querySelectorAll(".img");
const stickyContainer = document.getElementById("sticky-container");
const fullPage = document.querySelector('#fullpage');
const backButton = document.getElementById("back-button");

posts.forEach(function(post) {
    post.addEventListener("click", function(e) {
        let selImage = images.find(image => image === post.id);
        transformPostsTrack(selImage);
    });
});

function transformPostsTrack(selImage) {
    console.log(selImage);

    horizontalScroll = false;

    stickyContainer.style.display = "none";

    fullPage.style.backgroundImage = 'url(' + selImage + ')';
    fullPage.style.display = 'block';

    backButton.style.display = 'block';

};

backButton.addEventListener("click", function() {
    stickyContainer.style.display = "block";
    fullPage.style.display = 'none';
    backButton.style.display = 'none';
    horizontalScroll = true;
});