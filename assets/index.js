import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.ts';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

const playButton = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton = document.querySelector('#muteButton');
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.muted();
  }
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js').then(function(registration) {
    console.log('Service worker registration succeeded:', registration);
  }).catch(function(error) {
    console.log('Service worker registration failed:', error);
  });
} else {
  console.log('Service workers are not supported.');
}