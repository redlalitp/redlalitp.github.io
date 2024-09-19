const posts = document.querySelectorAll(".img");
const stickyContainer = document.getElementById("sticky-container");
const fullPage = document.querySelector('#fullpage');
const blogPostContainer = document.querySelector('#blog-post-container');
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

    blogPostContainer.style.backgroundImage = 'url(' + selImage + ')';
    fullPage.style.display = 'flex';

    backButton.style.display = 'block';

};

backButton.addEventListener("click", function() {
    stickyContainer.style.display = "block";
    fullPage.style.display = 'none';
    backButton.style.display = 'none';
    horizontalScroll = true;
});