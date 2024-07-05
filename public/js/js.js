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


// btn like song
const btnLike = document.querySelector("[btn-like]");
if(btnLike){
    btnLike.addEventListener("click",()=>{
        const idSong = btnLike.getAttribute("btn-like");
        const isActive =  btnLike.classList.contains("active");
        const typeLike = isActive ? "dislike" : "like";

        fetch(`/songs/like/${typeLike}/${idSong}`, { method: "PATCH"})
            .then(res => res.json())
            .then(data =>{
                const span = btnLike.querySelector("span");
                span.innerHTML = `${data.like} thích`;

                btnLike.classList.toggle("active");
            })
    })
}
// end btn like song

// btn favorite song
const btnFavorite = document.querySelector("[btn-favorite]");
if(btnFavorite){
    btnFavorite.addEventListener("click",()=>{
        const idSong = btnFavorite.getAttribute("btn-favorite");
        const isActive =  btnFavorite.classList.contains("active");
        const typeFavorite = isActive ? "unfavorite" : "favorite";

        fetch(`/songs/favorite/${typeFavorite}/${idSong}`, { method: "PATCH"})
            .then(res => res.json())
            .then(data =>{
                btnFavorite.classList.toggle("active");
            })
    })
}
// end btn favorite song