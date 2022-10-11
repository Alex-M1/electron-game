import { MenuKeys, MENU_SCALE, TEXT_ALIGN_KOF } from '../../constants/menuConstants';
import { ImageNames } from '../../constants/names';
import { translation } from '../../locales/translation';

export default class MenuItem extends Phaser.GameObjects.Sprite {
  private menuX: number;
  private menuY: number;
  scene: Props['scene'];
  title: Props['title'];
  menuTitle: Phaser.GameObjects.Text | null;
  menuSize: {
    width: number;
    height: number;
  };

  constructor({
    scene, title, menuX, menuY, menuSize,
  }: Props) {
    super(scene, 0, 0, ImageNames.menu_button);

    this.scene = scene;
    this.title = title;
    this.menuX = menuX;
    this.menuY = menuY;
    this.menuSize = menuSize;

    this.menuTitle = null;

    this.scene.add.existing(this);
    this.setInteractive();
  }

  init() {
    this.setMenuItemSprite();
    this.setTitle();
  }

  private setMenuItemSprite() {
    const width = this.width * MENU_SCALE;
    const height = this.height * MENU_SCALE;

    this.setDisplaySize(width, height);

    this.setX(this.menuX);
    this.setY(this.menuY + height);
  }

  private setTitle() {
    const center = this.getCenter();
    this.menuTitle = this.scene.add.text(center.x + TEXT_ALIGN_KOF, center.y - TEXT_ALIGN_KOF, translation(this.title))
      .setOrigin(0.5);
  }
}

export interface Props {
  scene: Phaser.Scene;
  menuX: number;
  menuY: number;
  title: MenuKeys;
  menuSize: {
    width: number;
    height: number;
  };
}
