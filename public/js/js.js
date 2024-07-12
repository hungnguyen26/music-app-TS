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

    ap.on('ended', function () {
        fetch(`/songs/listen/${datasong._id}`, { method: "PATCH"})
            .then(res => res.json())
            .then(data =>{
                const elementListen = document.querySelector(".singer-detail .inner-listen span");
                elementListen.innerHTML = `${data.listen} Lượt nghe`;
            })
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
const listbtnFavorite = document.querySelectorAll("[btn-favorite]");
if(listbtnFavorite.length > 0 ){
    listbtnFavorite.forEach((btnFavorite)=>{
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
    })
    
}
// end btn favorite song

// gợi ý tìm kiếm
const boxSearch = document.querySelector(".box-search");
if(boxSearch){
    const input = boxSearch.querySelector("input[name='key']");
    const boxSuggest = boxSearch.querySelector(".inner-suggest");


    input.addEventListener("keyup",()=>{
        const keyword = input.value;

        fetch(`/search/suggest?key=${keyword}`)
                .then(res => res.json())
                .then(data =>{
                    const songs = data.songs;
                    if(songs.length > 0){
                        boxSuggest.classList.add("show")

                        const htmls = songs.map(song => {
                            return `
                                <a class="inner-item" href="/songs/detail/${song.slug}">
                                    <div class="inner-img"><img src="${song.avatar}"></div>
                                    <div class="inner-info">
                                        <div class="inner-title">${song.title}</div>
                                        <div class="inner-singer"><i class="fa-solid fa-microphone-lines"></i>${song.infoSinger.fullName}</div>
                                    </div>
                                </a>
                            `
                        })

                        const boxList = boxSearch.querySelector(".inner-list");
                        boxList.innerHTML = htmls.join("");
                    }else{
                        boxSuggest.classList.remove("show")
                    }
                    
                })
    })
}
// end gợi ý tìm kiếm