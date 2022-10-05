import { sounds } from '../classes/SoundManager';
import { ImageNames, SceneNames } from '../constants/names';
import BaseScene from './BaseScene';

export default class MainMenu extends BaseScene {
  constructor() {
    super(SceneNames.MainMenu);
  }

  preload() {
    const bg = this.add.sprite(0, 0, ImageNames.start_bg).setOrigin(0);
    bg.setSize(1024, 769);
  }

  create() {
    sounds.main_theme.play({ loop: true });
  }
}
