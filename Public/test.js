var coverImages = ["img/banner.png", "img/banner2.jpg", "img/banner3.jpg"];
var image = document.getElementById("banner-img");

var counter = 0;

function changeBanner(){

    if (counter >= 3){
        counter = 0;
    }
    image.src = coverImages[counter];
    counter++;
}

// setInterval(changeBanner, 3000);

