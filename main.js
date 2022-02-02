var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object="";
function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
console.log("p and shift pressed togther");
block_image_width = block_image_width + 10;
block_image_height = block_image_height + 10;
document.getElementById("current_width").innerHTML = block_image_width
document.getElementById("current_height").innerHTML = block_image_height
}

if(e.shiftKey && keyPressed == '77'){
    console.log("m and shift pressed togther");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width
    document.getElementById("current_height").innerHTML = block_image_height

}
 
if(keyPressed == '38')
{ up();
console.log("up")
}
if(keyPressed == '40')
{ down();
console.log("down")
}
if(keyPressed == '37')
{ left();
console.log("left")
}
if(keyPressed == '39')
{ right();
console.log("right")
}
if(keyPressed == '87')
{ new_image('https://poweryourday.win.eu.panasonic.com/assets/img/ranger-green-in-air.png');
console.log("w");
}

if(keyPressed == '71')
{ new_image('https://rangercommand.com/wp-content/uploads/2021/05/header-ranger.png');
console.log("g");
}
if(keyPressed == '76')
{ new_image('light_green.jpg');
console.log("l");
}
if(keyPressed == '84')
{ new_image('https://poweryourday.win.eu.panasonic.com/assets/img/ranger-blue-in-air.png');
console.log("t");
}
if(keyPressed == '82')
{ new_image('https://static.wikia.nocookie.net/powerrangers/images/7/7c/Mmpr-yellow.png/revision/latest?cb=20180226030751');
console.log("r");
}
if(keyPressed == '89')
{ new_image('https://static.wikia.nocookie.net/powerrangers/images/0/09/Prs-blue.png/revision/latest?cb=20130731180635');
console.log("y");
}
if(keyPressed == '68')
{ new_image('dark_green.png');
console.log("d");
}
if(keyPressed == '85')
{ new_image('different.png');
console.log("u");
}
if(keyPressed == '67')
{ new_image('cloud.jpg');
console.log("c");
}
}