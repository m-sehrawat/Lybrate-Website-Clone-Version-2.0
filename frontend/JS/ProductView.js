
 let images = ["./GoodKartImages/slide1.png","./GoodKartImages/slide2.png","./GoodKartImages/slide3.png","./GoodKartImages/slide4.png","./GoodKartImages/slide5.png","./GoodKartImages/slide6.png","./GoodKartImages/slide7.png","./GoodKartImages/slide8.png","./GoodKartImages/slide9.png","./GoodKartImages/slide10.png","./GoodKartImages/slide11.png","./GoodKartImages/slide12.png","./GoodKartImages/slide13.png","./GoodKartImages/slide14.png","./GoodKartImages/slide15.png"];


let containers = document.getElementById("slideShow");
let interval;
function startSlideshow() {


   let counter =0;
    interval = setInterval(function(){

        containers.innerHTML = null;
    if(counter === images.length){
        counter = 0;
    }
        let img = document.createElement("img");
    img.src = images[counter];

    containers.append(img);
 counter+= 1;

    },1500)

  
}
startSlideshow();
import footer from './footer.js';
    var footer1 = footer();
    console.log(footer1);
    document.getElementById("footer").innerHTML=footer1;
