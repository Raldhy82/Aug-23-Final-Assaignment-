
//start button functions makes them flicker on and of while moving the meme 
function startbutton()
{

document.getElementById("startbutton").disabled = true;
document.getElementById("stopbutton").disabled = false;
moveing();
}
//stop button funtion makes them flicker while also stoping the pictures movment
function stopbutton()
{
    document.getElementById("stopbutton").disabled = true;
    document.getElementById("startbutton").disabled = false;
    Stop();
    
}
//controlls the movemnet of the picture as well a 
function moveing()
{
    //links this code to the image
    var image = document.getElementById("Army");
    var change = 200;
    intervalID = setInterval(function()
    {
        image.style.right= change+"px";
        image.style.left= change+"px";
        change +=60;
    },800);
    
}
//the funtion responalbe for stoping the code within a code 
function Stop()
{

   clearInterval(intervalID);
    clearInterval
}
