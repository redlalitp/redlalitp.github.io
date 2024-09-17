const track = document.getElementById("posts-track")

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0")
        return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * 100;
    const nextPercentageInfinite = parseFloat(track.dataset.prevPercentage) - percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageInfinite, 0), -100);
    track.dataset.percentage = nextPercentage;

    track.animate({
        transform : `translate(${nextPercentage}%)`
    }, {duration: 1000, fill:"forwards"});
    

    for(const card of track.getElementsByClassName("img")) {
        card.animate({
            objectPosition : `${nextPercentage + 100}%  -50%`
        }, {duration:1000, fill: "forwards"})
    }
}

window.onmouseup = e => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}