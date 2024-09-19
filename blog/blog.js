const track = document.getElementById("posts-track");
const stickySections = [...document.querySelectorAll('.sticky')];

//const footerSection = document.getElementById("footer-container");

let horizontalScroll = true;

let images = [
    "assets/1.jpg",
    "assets/2.jpg",
    "assets/3.jpg",
    "assets/4.jpg",
    "assets/5.jpg",
    "assets/6.jpg",
    "assets/7.jpg",
    "assets/8.jpg",
    "assets/9.jpg",
    "assets/10.jpg",
    "assets/11.jpg",
    "assets/12.jpg",
    "assets/13.jpg",
    "assets/14.jpg",
    "assets/15.jpg",
    "assets/16.jpg",
];

images.forEach((img, idx) => {
    let image = document.createElement("img");
    image.src = img;
    image.draggable = false;
    image.className = "img";
    image.dataset.postTitle = `title${idx+1}`;
    image.dataset.postText = `text${idx+1}`;
    image.dataset.postDate = `date${idx+1}`;
    image.id = `assets/${idx+1}.jpg`;
    track.appendChild(image);
})


function transform(section) {
    if(horizontalScroll) {
        const offsetTop = section.parentElement.offsetTop;
        const scrollSection = section.querySelector('.scroll-section');
        let percentage = (((window.scrollY) - offsetTop) / window.innerHeight)*100;
        //percentage *= 0.3;
        console.log(percentage);
        percentage = percentage < 0 ? 0 : percentage>300 ? 300 : percentage;
        scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;

        // console.log(percentage);
        for(const card of track.getElementsByClassName("img")) {
            card.animate({
                objectPosition : `${percentage/2}%  -50%`
            }, {duration:1200, fill: "forwards"})
        }
    }
}

var element = document.scrollingElement || document.documentElement;

element.addEventListener('scroll', (e) => {
    stickySections.forEach(s=> {
        transform(s)
    })
})

element.addEventListener('wheel', (e) => {
    stickySections.forEach(s=> {
        transform(s)
    })
})