import { ImageNames, SceneNames } from '../constants/names';
import BaseScene from './BaseScene';

export default class BootScene extends BaseScene {
  constructor() {
    super(SceneNames.Boot);
  }

  preload() {
    this.loadImage(ImageNames.start_bg, 'jpg');
  }

  create() {
    this.scene.start(SceneNames.Preload);
  }
}
