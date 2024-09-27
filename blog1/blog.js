let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.slide');


let images = [
    "../assets/blog-assets/1.jpg",
    "../assets/blog-assets/2.jpg",
    "../assets/blog-assets/3.jpg",
    "../assets/blog-assets/4.jpg",
    "../assets/blog-assets/5.jpg",
    "../assets/blog-assets/6.jpg",
    "../assets/blog-assets/7.jpg",
    "../assets/blog-assets/8.jpg",
    "../assets/blog-assets/9.jpg",
    "../assets/blog-assets/10.jpg",
    "../assets/blog-assets/11.jpg",
    "../assets/blog-assets/12.jpg",
    "../assets/blog-assets/13.jpg",
    "../assets/blog-assets/14.jpg",
    "../assets/blog-assets/15.jpg",
    "../assets/blog-assets/16.jpg",
];

images.forEach((img, idx) => {
    let image = document.createElement("div");
    image.style.backgroundImage = `url(${img})`;
    //image.draggable = false;
    image.className = "item";

    let content = document.createElement("div");
    content.className = "content";

    let title = document.createElement("div");
    title.className="name";

    let text = document.createElement("pre");
    text.className="des";

    let seeMoreBtn = document.createElement("button");
    seeMoreBtn.textContent="See More";


    const postTitle = `title${idx+1}`;
    const postText = `text${idx+1}`;
    title.textContent = eval(postTitle);
    text.textContent = eval(postText);

    content.appendChild(title, text, seeMoreBtn);
    content.appendChild(text);
    content.appendChild(seeMoreBtn);
    
    image.appendChild(content);

    slide.appendChild(image);
})





next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})