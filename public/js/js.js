//APlayer
const aplayer = document.querySelector("#aplayer");
if(aplayer){
    let datasong = aplayer.getAttribute("data-song");
    datasong = JSON.parse(datasong)
    // console.log(datasong);
    let datasinger = aplayer.getAttribute("data-singer");
    datasinger = JSON.parse(datasinger);
    const ap = new APlayer({
        container: aplayer,
        audio: [{
            name: datasong.title,
            artist: datasinger.fullName,
            url: datasong.audio,
            cover: datasong.avatar
        }],
        autoplay:true
    });

    // Lắng nghe sự kiện khi audio player play hoặc pause
    const avatar = document.querySelector('.singer-detail .inner-avatar img');

    ap.on('play', function () {
        avatar.style.animationPlayState = "running";
    });
    
    ap.on('pause', function () {
        avatar.style.animationPlayState = "paused";
    });
}

//end APlayer