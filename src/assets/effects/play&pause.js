var audio = document.getElementById('audio');
var playPauseBtn = document.getElementsByClassName('.playPauseBtn');
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audio.play();
		playPauseBtn.innerHTML = "Pause &#9208;";
	}else{
		count = 0;
		audio.pause();
		playPauseBtn.innerHTML = "Play &#9658;";
	}

}