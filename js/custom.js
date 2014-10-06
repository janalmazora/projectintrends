/*
Author: Jan Almazora
Final Project for Trends
*/ 


/*
| ***************************************
| START OF CONSTRUCTORS
| ***************************************
*/
// for constructing Sound Effects
function Sfx(_googleTextToSpeech) {
	this.audio 		= new Audio('http://translate.google.com/translate_tts?ie=utf-8&tl=en&q=' + _googleTextToSpeech);
	
	this.playSfx = function(){
		this.audio.play();
	}

	this.stopSfx = function() {
		this.audio.stop();
	}
}

// for constructing songs
function Song()	{
	this.title 			= "";
	this.artist 		= "";
	this.lyricsArray 	= [];
	this.bgvidsrc 		= "";
}

// for adding Songs to the playlist Array
function AddToPlayList(_song) {
	playlist.push(_song);
	console.log(_song + " has been added to the playlist");
}


/*
| ***************************************
| END OF CONSTRUCTORS
| ***************************************
*/

// this variable acts as a holder of all the songs
var playlist = [];

// hides the document when windows is loaded
window.onLoad = function() {
	$(document).hide();
};

// animate when the document is ready
$(document).ready(function() {
	$('#first-image').hide();
	$('#second-cloud').hide();
	$('#third-video').hide();

	setTimeout(function(){
		$('#first-image').slideDown("slow");
	}, 100);

	setTimeout(function(){
		$('#second-cloud').slideDown("slow");
	}, 1000);

	setTimeout(function(){
		$('#third-video').slideDown("slow");
	}, 1500);
});

// Used for toggling Sound effects that corresponds to the number
// pressed by the user.
function dialSongSfx(e) {
	var txtDial = document.getElementById("txtdial");

	if (txtDial.value.length <= 5) {
		switch(e.keyCode) {
			case 48: // for 0
				var kp0	= new Sfx('0');
				kp0.playSfx();
			break;

			case 49: // for number 1
				var kp1	= new Sfx('1');
				kp1.playSfx();
			break;

			case 50: // for number 2
				var kp2	= new Sfx('2');
				kp2.playSfx();
			break;

			case 51: // for number 3
				var kp3	= new Sfx('3');
				kp3.playSfx();
			break;

			case 52: // for number 4
				var kp4	= new Sfx('4');
				kp4.playSfx();
			break;

			case 53: // for number 5
				var kp5	= new Sfx('5');
				kp5.playSfx();
			break;

			case 54: // for number 6
				var kp6	= new Sfx('6');
				kp6.playSfx();
			break;

			case 55: // for number 7
				var kp7	= new Sfx('7');
				kp7.playSfx();
			break;

			case 56: // for number 8
				var kp8	= new Sfx('8');
				kp8.playSfx();
			break;

			case 57: // for number 9
				var kp9	= new Sfx('9');
				kp9.playSfx();
			break;

			case 13: // Enter / Return
				if(txtDial.value.length > 0 && txtDial.value.length == 5) {
					var kpEnter = new Sfx('Song Saved');
					kpEnter.playSfx();
				} else {
					var kpEnter = new Sfx('Song number does not exist');
					kpEnter.playSfx();
				}
			break;

			case 8: // BackSpace
				// do nothing
			break;

			default: // Default catcher
				var validation = new Sfx('please enter a number');
				validation.playSfx();
				txtDial.value = "";
			break;
		}
	}
	else {
		var validation = new Sfx('Song Number Does Not Exist');
		validation.playSfx();
	}
	console.log(e.keyCode);
}