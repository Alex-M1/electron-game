import LoadingBar from '../classes/LoadingBar';
import { ImageNames, SceneNames } from '../constants/names';
import BaseScene from './BaseScene';
import tilemap from '../assets/map.json';
import { SoundsType } from '../types/commonTypes';
import SoundManager from '../classes/SoundManager';

export default class PreloadScene extends BaseScene {
  sounds: SoundsType | null;

  constructor() {
    super(SceneNames.Preload);
    this.sounds = null;
  }
  preload() {
    new LoadingBar(this).init();
    this.add.sprite(0, 0, ImageNames.start_bg).setOrigin(0);

    this.load.spritesheet(ImageNames.tileset, 'assets/sprites/tileset.png', { frameWidth: 16, frameHeight: 16 });
    this.load.tilemapTiledJSON('tilemap', tilemap);

    SoundManager.loadAllSound(this);
    // this.loadAtlas(AtlasNames.objects);
  }
  create() {
    SoundManager.creatSounds(this);
    this.scene.start(SceneNames.MainMenu);
  }
}
