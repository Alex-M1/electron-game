import LoadingBar from '../classes/LoadingBar';
import { ImageNames, SceneNames } from '../constants/names';
import BaseScene from './BaseScene';
import tilemap from '../../assets/map.json';
import { SoundsType } from '../types/commonTypes';
import SoundManager from '../classes/SoundManager';
import { tileFrameSize } from '../constants/configs';

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

    this.load.spritesheet(ImageNames.tileset, this.getSpritePath(ImageNames.tileset), tileFrameSize);
    this.load.tilemapTiledJSON('tilemap', tilemap);

    SoundManager.loadAllSound(this);
    // this.loadAtlas(AtlasNames.objects);
  }
  create() {
    SoundManager.creatSounds(this);
    this.scene.start(SceneNames.MainMenu);
  }
}
