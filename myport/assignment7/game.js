window.onload = pageLoad;
let started = false;

function pageLoad(){
	let StartButton = document.getElementById("start");
	StartButton.onclick = startGame;
}

function startGame(){
	if(started == false)
	{
		started = true;
		let Checkinput = document.getElementById("numbox").value;
		if(Checkinput != "")
		{
			alert("Ready");
			setTimeout(addBox,1000)
			timeStart();
		}
		else{
			alert("pls put the num of box.");
		}	
	}
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5;
	var second = min*60; 
	var x = document.getElementById('clock');
	timer = setInterval(timeCount,TIMER_TICK);
	
	function timeCount(){
		x.innerHTML = second; 
			second--;
		var allbox = document.querySelectorAll("#game-layer div");
		if	(second != -1 && allbox.length == 0){
			alert("You Win.");
			x.innerHTML = "";
			clearInterval(timer);
			timer = null;
			clearScreen();
			started = false;
		}
		else if(x.innerHTML == "-1" && allbox.length > 0){
			x.innerHTML = "0";
			clearInterval(timer);
			timer = null;
			alert("Game Over, You more fast.");
			x.innerHTML = "";
			clearScreen();
			started = false;
		}
	}
}

function addBox(){
	var numbox = document.getElementById("numbox").value;
    var gameLayer = document.getElementById("game-layer");
    var colorDrop = document.getElementById("color");
    for (var i =0; i<numbox;i++){
        var boxcolor = document.createElement("div");
        var tempbox = document.createElement("div");
        tempbox.className = "square";
        tempbox.id = "box"+i;
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";
        gameLayer.appendChild(tempbox) ;
        boxcolor.className = colorDrop.value;
        document.getElementById(tempbox.id).appendChild(boxcolor);
        bindBox(tempbox);
	}
}

function bindBox(box){
	box.onclick = function(){
		document.getElementById(box.id).remove();
	}
}

function clearScreen(){
	var allbox = document.getElementById("game-layer");

	while(allbox.firstChild){
        allbox.removeChild(allbox.lastChild);
    }
}