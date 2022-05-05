import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const KEY = 'videoplayer-current-time';

const key = localStorage.getItem(KEY);

if (key) {
  player.setCurrentTime(parseFloat(key));
}

player.on(
  'timeupdate',
  throttle(date => {
    localStorage.setItem(KEY, date.seconds.toString());
  }, 1000),
);
