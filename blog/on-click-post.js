const posts = document.querySelectorAll(".img");
const stickyContainer = document.getElementById("sticky-container");
const fullPage = document.querySelector('#fullpage');
const blogPostContainer = document.querySelector('#blog-post-container');
const backButton = document.getElementById("back-button");
const blogPostTitleContainer = document.getElementById("blog-post-title-container");
const blogPostDateContainer = document.getElementById("blog-post-date-container");
const blogPostTextContainer = document.getElementById("blog-post-text-container");
const blogPageTitle = document.getElementById("blog-page-title");

posts.forEach(function(post) {
    post.addEventListener("click", function(e) {
        let selImage = images.find(image => image === post.id);
        transformPostsTrack(selImage, post);
    });
});

function transformPostsTrack(selImage, post) {
    console.log(selImage);

    horizontalScroll = false;

    stickyContainer.style.display = "none";
    blogPageTitle.style.display = "none";

    blogPostContainer.style.backgroundImage = 'url(' + selImage + ')';
    blogPostTitleContainer.textContent = eval(post.dataset.postTitle);
    blogPostDateContainer.textContent = eval(post.dataset.postDate);
    blogPostTextContainer.textContent = eval(post.dataset.postText);
    fullPage.style.display = 'flex';

    backButton.style.display = 'block';

};

backButton.addEventListener("click", function() {
    stickyContainer.style.display = "block";
    blogPageTitle.style.display = "flex";
    fullPage.style.display = 'none';
    backButton.style.display = 'none';
    horizontalScroll = true;
});
