// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '100%',
          width: '100%',
          playerVars: { 
            'autoplay': 1, 
            'controls': 0, 
            rel: 0,
            listType:'playlist',
            list: 'PL2_S-amORfd9_62VrG5yOnNVz5Bz72wAf'
          },
          events: {
            'onReady': onPlayerReady
            
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
        player.mute();
      }



  var btn = document.getElementById('btn');
  var onOff = 1;
  function toggle(){
    if (onOff){
      player.unMute();
      document.getElementById("volume-toggle").classList.add('fa-volume-up');
      document.getElementById("volume-toggle").classList.remove('fa-volume-off');
      onOff = 0;
    }
    else {
      player.mute();
      document.getElementById("volume-toggle").classList.add('fa-volume-off');
      document.getElementById("volume-toggle").classList.remove('fa-volume-up');
      onOff = 1;
    }
  }

  var closeBtn = document.getElementById('close-btn');
  var openBtnVis = document.getElementById('open-btn-vis');
  var openBtnNon = document.getElementById('open-btn-non')
  var openClose = 1;
   function closeOpen(){
    if (openClose){
      var a = document.getElementById("box");
      var b = document.getElementById('open-btn-non');
      a.id = "closed-box";
      b.id = "open-btn-vis";
      openClose = 0;
    }
    else {
      var a = document.getElementById("closed-box");
      var b = document.getElementById('open-btn-vis');
      a.id = "box";
      b.id = "open-btn-non";
      openClose = 1;
    }
  }

  function forward(){
    player.nextVideo()
  }

  function back(){
    player.previousVideo()
  }