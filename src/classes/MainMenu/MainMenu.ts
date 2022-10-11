import { APP_SIZE } from '../../constants/configs';
import { MENU_ITEM_TITLES, MENU_SCALE } from '../../constants/menuConstants';
import { ImageNames } from '../../constants/names';
import MenuItem from './MenuItem';

export default class MainMenu extends Phaser.GameObjects.Sprite {
  scene: Phaser.Scene;
  // menuSprite: Phaser.GameObjects.Sprite;
  menu: {
    width: number;
    height: number;
  };

  constructor(scene: Phaser.Scene) {
    super(scene, 0, 0, ImageNames.menu_bg);
    this.scene = scene;
    this.menu = { width: 0, height: 0 };

    this.setOrigin(0);
    this.scene.add.existing(this);
  }

  init() {
    this.menuBgInit();
    this.addMenuItems();
  }

  private menuBgInit() {
    this.menu = {
      width: this.width * MENU_SCALE,
      height: this.height * MENU_SCALE,
    };
    this.setDisplaySize(this.menu.width, this.menu.height);
    this.setX(APP_SIZE.width - this.menu.width - (this.menu.width / 2));
    this.setY(100);
  }

  private addMenuItems() {
    const center = this.getCenter();
    MENU_ITEM_TITLES.forEach((name, i) => {
      const item = new MenuItem({
        scene: this.scene,
        menuY: this.y + (i * 100),
        menuX: center.x,
        title: name,
        menuSize: this.menu,
      });

      item.init();
    });
  }
}
