let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let home = document.querySelector('.home-button');
let slide = document.querySelector('.slide');
let lightsOutBttn = document.querySelector('.lights-out');

let showText = true;

let lightsOut = false;

lightsOutAction();

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

    let darkLayer = document.createElement("div");
    darkLayer.className = "dark-layer";


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

    darkLayer.appendChild(content);
    darkLayer.appendChild(imageMeta);

    image.appendChild(darkLayer);

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
    elLocationMap.target = "_blank";
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

    const infoButton = document.createElement("button");
    infoButton.className = "info-button";
    infoButton.id = "info-button";


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
    el.appendChild(infoButton);

    return el;

}


lightsOutBttn.addEventListener('click', lightsOutAction);

function lightsOutAction() {
    let darkLayers = document.querySelectorAll('.dark-layer');
    let image = document.querySelector('.light-mode-img');
    if(lightsOut) {
        image.src = "../assets/light-mode.png";
        darkLayers.forEach(item => {
            item.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            
        });
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        
        lightsOut = false
        
    } else {
        image.src = "../assets/dark-mode.png";
        darkLayers.forEach(item => {
            item.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        });
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        lightsOut = true;
    }
}



next.addEventListener('click', nextKeyAction);

function nextKeyAction() {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
    items[1].classList.remove('active');
    items[2].classList.add('active');
    hideContent(items[1]);
    showText = false;
    hideText(true);
}

prev.addEventListener('click', prevKeyAction);

function prevKeyAction() {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]);
    items = document.querySelectorAll('.item');
    items[1].classList.add('active');
    items[2].classList.remove('active');
    hideContent(items[2]);
    showText = false;
    hideText(true);
}

function hideContent(item) {
    item.querySelector('.content').style.display = 'none';
    item.querySelector('.image-meta-container').style.display = 'none';
}

function hideText(navigating) {
    if (fullSitePossible) {
        infoState = false;
        infoButtonAction();

        let items = document.querySelectorAll('.item')
        items[1].classList.add('active');
        const activeItem = document.querySelector('.active');
        const imageMeta = document.querySelectorAll(".image-meta-container")[1];

        let infoButton = imageMeta.querySelector('#info-button');
        infoButton.addEventListener("click", infoButtonAction);
        
        if (showText) {

            //hide darkmode button, we dont need that here.
            lightsOutBttn.style.display = "none";

            //if its dark mode, switch it to light mode.
            if(!lightsOut) {
                lightsOutAction();
            }

            activeItem.querySelector('.content').style.display = 'none';

            if(!navigating) {
                Array.from(items).slice(2, 5).forEach(item => {
                    item.classList.add("shrink");
                
                })
            }

            imageMeta.style.display = "flex";
            hideButtons();
            showText = false
        }
        else {
            lightsOutBttn.style.display = "flex";
            activeItem.querySelector('.content').style.display = 'flex';
            imageMeta.style.display = "none";

            if(!navigating) {
                Array.from(items).slice(2, 5).forEach(item => {
                    item.classList.remove("shrink");
                
                })
            }

            showButtons();  
            showText = true;
        }
    }
}

function hideButtons() {
    next.style.opacity = 0;
    next.style.pointerEvents = "none";
    prev.style.opacity = 0;
    prev.style.pointerEvents = "none";
    home.style.opacity = 0;
    home.style.pointerEvents = "none";
}


function showButtons() {
    next.style.opacity = 1;
    next.style.pointerEvents = "auto";
    prev.style.opacity = 1;
    prev.style.pointerEvents = "auto";
    home.style.opacity = 1;
    home.style.pointerEvents = "auto";
}


function fullSitePossible() {
    if (window.innerWidth >= 600) {
        return true;
    } else {
        return false;
    }
}

let infoState = false;



function infoButtonAction(){
    const imageMeta = document.querySelectorAll(".image-meta-container")[1];
    let infoButton = imageMeta.querySelector('#info-button');

    if(infoState) {
        infoButton.classList.add("info-button-info");
        infoButton.classList.remove("info-button-minus");
        imageMeta.querySelector(".image-meta-location").style.display = "none";
        imageMeta.querySelector(".image-meta-details").style.display = "none";
        imageMeta.querySelector(".image-meta-device").style.display = "none";
        imageMeta.querySelector(".image-meta-date").style.display = "none";
        infoState = false;
    }
    else {
        infoButton.classList.add("info-button-minus");
        infoButton.classList.remove("info-button-info");
        imageMeta.querySelector(".image-meta-location").style.display = "block";
        imageMeta.querySelector(".image-meta-details").style.display = "flex";
        imageMeta.querySelector(".image-meta-device").style.display = "block";
        imageMeta.querySelector(".image-meta-date").style.display = "block";
        infoState = true;
    }
};


document.addEventListener('keydown', (event) => {
    if (fullSitePossible && showText) {
        if (event.key === 'ArrowRight') {

            console.log('Right arrow key pressed!'); 
            nextKeyAction();
        }
        if (event.key === 'ArrowLeft') {
            console.log('Right arrow key pressed!'); 
            prevKeyAction();
        }
    }
  });