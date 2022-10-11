import { ImageNames } from '../constants/names';
import tileset from '../../assets/sprites/tileset.png';
import { tileFrameSize } from '../constants/configs';
import tilemap from '../../assets/map.json';

import startBg from '../../assets/sprites/start_bg.png';
import menuBg from '../../assets/sprites/menu_bg.svg';
import crossMenu from '../../assets/sprites/cross_menu.svg';
import menuButton from '../../assets/sprites/menu_button.svg';

export default class ImageManager {
  static loadMainBg(scene: Phaser.Scene) {
    scene.load.image(ImageNames.start_bg, startBg);
  }

  static loadImages(scene: Phaser.Scene) {
    scene.load.image(ImageNames.menu_bg, menuBg);
    scene.load.image(ImageNames.cross_menu, crossMenu);
    scene.load.image(ImageNames.menu_button, menuButton);
  }

  static loadSpriteSheet(scene: Phaser.Scene) {
    scene.load.spritesheet(ImageNames.tileset, tileset, tileFrameSize);
  }

  static loadTilemapTiledJSON(scene: Phaser.Scene) {
    scene.load.tilemapTiledJSON('tilemap', tilemap);
  }
}
