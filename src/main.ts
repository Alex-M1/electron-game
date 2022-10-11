// import { invoke } from "@tauri-apps/api/tauri";
import Phaser from 'phaser';
import { APP_SIZE } from './constants/configs';
import BootScene from './scenes/BootScene';
import MainMenu from './scenes/MainMenuScene';
import PreloadScene from './scenes/PreloadScene';

window.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-new
  new Phaser.Game({
    ...APP_SIZE,
    type: Phaser.AUTO,
    scene: [BootScene, PreloadScene, MainMenu],
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
      default: 'matter',
      matter: {
        debug: true,
        gravity: { x: 0, y: 0 },
      },
    },
  });
});

// async function greet() {
//   if (greetMsgEl && greetInputEl) {
//     // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//     greetMsgEl.textContent = await invoke("greet", {
//       name: greetInputEl.value,
//     });
//   }
// }
