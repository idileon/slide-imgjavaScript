var i = 0; //start point
var images = [];
var time = 2000;

//image list
images[0] = ('img/salads.jpg');
images[1] = ('img/salad1.jpg');
images[2] = ('img/salad2.jpg');

//change Image
function changeImg() {
    document.slide.src = images[i];
    
    if(i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    
    setTimeout('changeImg()', time);
}

window.onload = changeImg;
