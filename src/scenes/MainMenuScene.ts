import MainMenu from '../classes/MainMenu/MainMenu';
import MenuItem from '../classes/MainMenu/MenuItem';
import { sounds } from '../classes/SoundManager';
import { soundVolume } from '../constants/configs';
import { MenuKeys, MENU_SCALE, SCALE_KOF } from '../constants/menuConstants';
import { ImageNames, SceneNames } from '../constants/names';
import BaseScene from './BaseScene';

export default class MainMenuScene extends BaseScene {
  constructor() {
    super(SceneNames.MainMenu);
  }

  preload() {
    const bg = this.add.sprite(0, 0, ImageNames.start_bg).setOrigin(0);
    const mainMenu = new MainMenu(this);
    mainMenu.init();
    this.input.on('gameobjectdown', this.onMenuItemClicked, this);
    this.input.on('pointerover', this.onPointerOver(MENU_SCALE + SCALE_KOF));
    this.input.on('pointerout', this.onPointerOver(MENU_SCALE));
    bg.setSize(1024, 769);
  }

  create() {
    sounds.main_theme.play({ loop: true, volume: soundVolume });
  }

  onPointerOver = (scale: number) => (_evt: any, item: MenuItem[]) => {
    this.add.tween({
      targets: item[0],
      duration: 100,
      scale,
    });
  };

  onMenuItemClicked(_evt: any, item: MenuItem) {
    if (item.title === MenuKeys.new_game) this.goToNewGame();
    else if (item.title === MenuKeys.loading) this.goToLoadings();
    else if (item.title === MenuKeys.settings) this.goToSettings();
  }

  goToNewGame() { }
  goToLoadings() { }
  goToSettings() { }
}
