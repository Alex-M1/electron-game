import { SceneNames } from '../constants/names';
import BaseScene from './BaseScene';
import ImageManager from '../classes/ImageManager';

export default class BootScene extends BaseScene {
  constructor() {
    super(SceneNames.Boot);
  }

  preload() {
    ImageManager.loadMainBg(this);
  }

  create() {
    this.scene.start(SceneNames.Preload);
  }
}
