const APIURL='http://zmdp.cloud/iseAlim/spotify.json';



async function getSpotify(){

    const music= await fetch(APIURL);
    const musicData= await music.json();

    console.log(musicData);


    musicData.recentlyPlayed.forEach(musicCard =>{
        const {images, name, description , external_urls} =musicCard;

        const musicCardEl= document.createElement('div');
        musicCardEl.classList.add('musicCard');

        musicCardEl.innerHTML=`
            <div>
                <img src=${images[0].url} alt="">
                    <div class="musicCard-info">
                        <span>${name}</span>
                        <p>${description}</p>
                    </div>
                <div class="green">
                    <a href=${external_urls}>
                        <img src="/img/rightVideo.png" alt="">
                    </a>
                </div>
            </div>
                
        `;

        document.body.appendChild(musicCardEl);

    })

    musicData.recommended.forEach(musicCard2 =>{
        const {images , name, description , external_urls} = musicCard2;

        const musicCardEl= document.createElement('div');
        musicCardEl.classList.add('musicCard2');

        musicCardEl.innerHTML=`
            <div>
                    <img src=${images[0].url} alt="">
                    <div class="musicCard2-info">
                        <span>${name}</span>
                        <p>${description}</p>
                    </div>
                    <div class="green">
                        <a href=${external_urls}>
                            <img src="/img/rightVideo.png" alt="">
                        </a>  
                    </div>
            </div>
        `;

        document.body.appendChild(musicCardEl);
    })


    return musicData;
}

getSpotify();