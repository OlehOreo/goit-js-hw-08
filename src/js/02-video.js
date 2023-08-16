import playerVimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new playerVimeo(iframe);
const localStorageKey = 'videoplayer-current-time';
const viewTime = localStorage.getItem(localStorageKey);

player.on('timeupdate', throttle(timeUpdate, 1000));
player.setCurrentTime(Number(viewTime));

function timeUpdate(data) {
  const currentTime = data.seconds;
  localStorage.setItem(localStorageKey, currentTime);
}
