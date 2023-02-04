var ghost = document.getElementById('friend');

var positionX = 0;
var positionY = 0;

var destinationX = 0;
var destinationY = 0;

var move_speed = 2;
document.onmousedown = function set_destination(event)
{
    destinationX = event.pageX;
    destinationY = event.pageY;

    ghost.style.left = positionX + "px";
    ghost.style.top = positionY + "px";
}

function move_ghost()
{
    if(positionX < destinationX)
    {
        positionX += move_speed;
        ghost.style.rotate = "5deg";
    } 
    if(positionX > destinationX)
    {
        ghost.style.rotate = "-5deg";
        positionX -= move_speed;
    } 
    if(positionY < destinationY) positionY += move_speed;
    if(positionY > destinationY) positionY -= move_speed;
    ghost.style.left = positionX + "px";
    ghost.style.top = positionY + "px";
    window.requestAnimationFrame(move_ghost);
}
window.requestAnimationFrame(move_ghost);