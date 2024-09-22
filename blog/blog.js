const track = document.getElementById("posts-track");
const stickySections = [...document.querySelectorAll('.sticky')];
let limitScroll = window.innerWidth > 800 ? 100 : 800;


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
    let image = document.createElement("div");
    image.style.backgroundImage = `url(${img})`;
    image.draggable = false;
    image.className = "img";
    image.dataset.postTitle = `title${idx+1}`;
    image.dataset.postText = `text${idx+1}`;
    image.dataset.postDate = `date${idx+1}`;
    image.id = `assets/${idx+1}.jpg`;
    track.appendChild(image);
    const imageTitle = document.createElement("div");
    imageTitle.className = "img-title";
    imageTitle.textContent = eval(image.dataset.postTitle);
    image.appendChild(imageTitle);
})

if(!matchMedia('(hover: none)').matches) {
    function transform(section) {
        if(horizontalScroll) {
            const offsetTop = section.parentElement.offsetTop;
            const scrollSection = section.querySelector('.scroll-section');
            
            console.log(window.scrollY);
            let percentage = (((window.scrollY) - offsetTop) / 700)*100;
            
            animate(percentage, scrollSection);
        }
    }

    function animate(percentage, scrollSection) {
        percentage = percentage < 0 ? 0 : percentage > limitScroll ? limitScroll : percentage;
            
        scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;

        for(const card of track.getElementsByClassName("img")) {
            card.animate({
                backgroundPosition : `${percentage/(limitScroll/100)}%  -50%`
            }, {duration:1200, fill: "forwards"})
        }
    }


    var element = document.scrollingElement || document.documentElement;


    element.addEventListener('wheel', (e) => {
        stickySections.forEach(s=> {
            transform(s);
        })
    })

    element.addEventListener('scroll', (e) => {
        stickySections.forEach(s=> {
            transform(s);
        })
    })
}

// let touchScrollPos = 0;
// let touchStartPosX = 0;
// window.addEventListener('touchmove', (e) => {
//     // Different devices give different values with different decimal percentages.
//     const currentPageX = Math.round(e.changedTouches[0].screenY);
//     if (touchStartPosX === currentPageX) return;
//     console.log(currentPageX);
//     const deltaY = touchStartPosX - currentPageX;
//     touchScrollPos += deltaY;

//     if ( touchScrollPos < 0) {
//         touchScrollPos = 0;
//     } else if(touchScrollPos > 6405){
//         touchScrollPos = 6405;
//     }

//     touchStartPosX = currentPageX;
//     const offsetTop = section.parentElement.offsetTop;
        
//     console.log(touchScrollPos);
//     let percentage = (((touchScrollPos) - offsetTop) / 700)*100;
//     const scrollSection = document.querySelector('.scroll-section');
//     animate(percentage, scrollSection);
// });