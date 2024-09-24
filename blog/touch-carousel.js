if(matchMedia('(hover: none)').matches) {
    const track = document.getElementById("posts-track")

    window.ontouchstart = e => {
        track.dataset.mouseDownAt = e.touches[0].clientX;
        console.log(`touchstart: ${e.touches[0].clientX}`);
    }

    window.ontouchmove = e => {
        if(track.dataset.mouseDownAt === "0")
            return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.touches[0].clientX;
        const maxDelta = window.innerWidth / 2;
        const percentage = (mouseDelta / maxDelta) * 100;
        const nextPercentageInfinite = parseFloat(track.dataset.prevPercentage) - percentage;
        const nextPercentage = Math.max(Math.min(nextPercentageInfinite, 0), -100);
        track.dataset.percentage = nextPercentage;
        //console.log(`mouseDelta: ${mouseDelta}`);
        //console.table({"mouseDelta": mouseDelta, "maxDelta": maxDelta, "percentage":percentage, "nextPercentageInfinite":nextPercentageInfinite, "nextPercentage":nextPercentage  });

        track.animate({
            transform : `translate(${nextPercentage}%)`
        }, {duration: 1200, fill:"forwards"});
        

        for(const card of track.getElementsByClassName("img")) {
            card.animate({
                backgroundPosition : `${nextPercentage + 100}%  center`
            }, {duration:1200, fill: "forwards"})
        }
        console.log(`touchmove: ${e.touches[0].clientX}`);
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
    }

    window.ontouchend = e => {
        console.log(`touchend: ${e.changedTouches[0].clientX}`);
        //track.dataset.mouseDownAt = "0";
    }
}