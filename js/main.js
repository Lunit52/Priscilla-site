var btn = document.getElementById('btn'); //gets button
var video = document.getElementById('vid');
var onOff = 1;
video.mute()

function toggle(){
	if (onOff){ //if onOff returns true (1)
		btn.style.color = "green";
		video.unmute('vid');
		onOff = 0;
	}
	else {
		btn.style.color = "red";
		video.mute('vid');
		onOff = 1
	}
}

btn.onclick = toggle;