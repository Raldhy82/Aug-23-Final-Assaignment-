function Initial()
    {
    alert('init');
    document.getElementById("startButton").disabled=true;

    document.getElementById("stopButton").disabled=false;
    }
    function halt()
    {
    alert("halt");
    document.getElementById("startButton").disabled=false;

    document.getElementById("stopButton").disabled=true;
    }
    function beet(){
        var mysound=new sound("beet.mp3");
        mysound.play();
    }
    function sound(src){
        this.sound=document.creatElement("audio");
        this.sound.src= src;
        this.play= function(){
            this.sound.play();
        }
        function stopmusic(){
            
        }
    }