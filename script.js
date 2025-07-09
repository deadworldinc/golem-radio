window.onload = function() {
    let streamPlaying = false;
    let buttonPlayImage = document.getElementById("buttonPlayImage");
    let mainAudio = document.getElementById("mainAudio");
    let spanTrackName = document.getElementById("spanTrackName");
    let buttonLike = document.getElementById("buttonLike");

    buttonPlay.onclick = function () {
        mainAudio.play();
        if (streamPlaying) {
            buttonPlayImage.classList.add("fa-play");
            streamPlaying = false;
            mainAudio.volume = 0;
        } else {
            buttonPlayImage.classList.remove("fa-play");
            buttonPlayImage.classList.add("fa-pause");
            streamPlaying = true;
            mainAudio.volume = 1;
        }
    }
    
    setInterval(() => {
        fetch("https://golemworld.ru:8443/status-json.xsl")
            .then(jsonResponse => jsonResponse.json())
            .then(json => {
                spanTrackName.innerHTML = json.icestats.source.title;
                mainAudio.title = `${json.icestats.source.title} (Golem Radio)`;
            });
    }, 1000);
}
