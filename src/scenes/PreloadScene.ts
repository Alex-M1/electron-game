import LoadingBar from '../classes/LoadingBar';
import { ImageNames, SceneNames } from '../constants/names';
import BaseScene from './BaseScene';
import { SoundsType } from '../types/commonTypes';
import SoundManager from '../classes/SoundManager';
import ImageManager from '../classes/ImageManager';

export default class PreloadScene extends BaseScene {
  sounds: SoundsType | null;

  constructor() {
    super(SceneNames.Preload);
    this.sounds = null;
  }
  preload() {
    new LoadingBar(this).init();
    this.add.sprite(0, 0, ImageNames.start_bg)
      .setOrigin(0);

    ImageManager.loadImages(this);
    ImageManager.loadSpriteSheet(this);
    ImageManager.loadTilemapTiledJSON(this);

    SoundManager.loadAllSound(this);
  }
  create() {
    SoundManager.creatSounds(this);
    this.scene.start(SceneNames.MainMenu);
  }
}
