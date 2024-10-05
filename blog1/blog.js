let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let home = document.querySelector('.home-button');
let slide = document.querySelector('.slide');

let showText = true;

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


    let imageMeta = getImageMeta(idx);

    let content = document.createElement("div");
    content.className = "content";

    let titleArea = document.createElement("div");
    titleArea.className = "title-area backdrop";

    let title = document.createElement("div");
    title.className = "name";

    let date = document.createElement("div");
    date.className = "date";

    let text = document.createElement("pre");
    text.className = "des backdrop";

    titleArea.appendChild(title);
    titleArea.appendChild(date);

    const postTitle = `title${idx + 1}`;
    const postText = `text${idx + 1}`;
    const postDate = `date${idx + 1}`;
    title.textContent = eval(postTitle);
    text.textContent = eval(postText);
    date.textContent = eval(postDate);

    content.appendChild(titleArea);
    // content.appendChild(date);
    content.appendChild(text);
    //content.appendChild(seeMoreBtn);

    image.appendChild(content);
    image.appendChild(imageMeta);

    slide.appendChild(image);
})


function getImageMeta(index) {

    const imageMetaData = imagesData.find(md => md.FileName === `${index + 1}.jpg`);

    let el = document.createElement("div");
    el.className = "image-meta-container backdrop";
    el.id = "image-meta-container";

    let elLocation = document.createElement("div");
    elLocation.className = "image-meta-location";
    let elLocationName = document.createElement("span");
    elLocationName.textContent = eval(`metaLocation${index + 1}`);
    let elLocationMap = document.createElement("a");
    elLocationMap.href = eval(`metaMap${index + 1}`);
    let elLocIcon = document.createElement("img");
    elLocIcon.className = "location-icon";
    elLocIcon.src = "../assets/location.png";
    elLocationMap.appendChild(elLocIcon);

    let elDevice = document.createElement("div");
    elDevice.className = "image-meta-device";
    elDevice.textContent = `${imageMetaData.Make} ${imageMetaData.Model}`;

    let elDetails = document.createElement("div");
    elDetails.className = "image-meta-details";
    let elAparture = document.createElement("span");
    elAparture.textContent = `Aperture: ${imageMetaData.ApertureValue}`;
    let elIso = document.createElement("span");
    elIso.textContent = `ISO: ${imageMetaData.ISO}`;
    let elFocalLength = document.createElement("span");
    elFocalLength.textContent = `Focal Length: ${imageMetaData.FocalLength}`;
    let elShutterSpeed = document.createElement("span");
    elShutterSpeed.textContent = `Shutter Speed: ${imageMetaData.ShutterSpeed}`;

    let elDate = document.createElement("div");
    elDate.className = "image-meta-date";
    elDate.textContent = imageMetaData.CreateDate;


    elLocation.appendChild(elLocationName);
    elLocation.appendChild(elLocationMap);

    elDetails.appendChild(elAparture);
    elDetails.appendChild(elIso);
    elDetails.appendChild(elFocalLength);
    elDetails.appendChild(elShutterSpeed);

    el.appendChild(elLocation);
    el.appendChild(elDevice);
    el.appendChild(elDetails);
    el.appendChild(elDate);

    return el;

}




next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
    items[1].classList.remove('active');
    items[2].classList.add('active');
    hideContent(items[1]);
    showText = false;
    hideText(true);
})

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]);
    items = document.querySelectorAll('.item');
    items[1].classList.add('active');
    items[2].classList.remove('active');
    hideContent(items[2]);
    showText = false;
    hideText(true);
})

function hideContent(item) {
    item.querySelector('.content').style.display = 'none';
    item.querySelector('.image-meta-container').style.display = 'none';
}

function hideText(navigating) {
    if (fullSitePossible) {
        let items = document.querySelectorAll('.item')
        items[1].classList.add('active');
        const activeItem = document.querySelector('.active');
        const imageMeta = document.querySelectorAll(".image-meta-container")[1];
        
        if (showText) {
            activeItem.querySelector('.content').style.display = 'none';

            if(!navigating) {
                Array.from(items).slice(2, 5).forEach(item => {
                    item.classList.add("shrink");
                
                })

                // items.forEach(item => {
                //     item.style.height = "0rem";
                // })
            }

            imageMeta.style.display = "flex";
            hideButtons();
            showText = false
        }
        else {
            activeItem.querySelector('.content').style.display = 'flex';
            imageMeta.style.display = "none";

            if(!navigating) {
                Array.from(items).slice(2, 5).forEach(item => {
                    item.classList.remove("shrink");
                
                })
                // items[2].style.left = "60%";
                // items[3].style.left = "calc(60% + 11.25rem)";
                // items[4].style.left = "calc(60% + 22.5rem)";

                // items.forEach(item => {
                //     item.style.height = "10rem";
                // })
            }

            showButtons();
            showText = true;
        }
    }
}

function hideButtons() {
    next.style.opacity = 0;
    prev.style.opacity = 0;
    home.style.opacity = 0;
}

function showButtons() {
    next.style.opacity = 1;
    prev.style.opacity = 1;
    home.style.opacity = 1;
}


function fullSitePossible() {
    if (window.innerWidth >= 600) {
        return true;
    } else {
        return false;
    }
}
