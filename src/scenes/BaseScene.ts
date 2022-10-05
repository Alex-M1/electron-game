import { ImageNames, SoundNames } from '../constants/names';
import { ImageFormat, SoundFormat } from '../types/commonTypes';

export default class BaseScene extends Phaser.Scene {
  loadImage(imageName: ImageNames, format: ImageFormat = 'png') {
    this.load.image(imageName, this.getSpritePath(imageName, format));
  }
  // loadAtlas(atlasName: AtlasNames) {
  //   // this.load.atlas(atlasName, this.getSpritePath(atlasName), this.getAtlasPath(atlasName));
  // }

  loadSounds(name: SoundNames, format: SoundFormat = 'mp3') {
    this.load.audio(name, `assets/sounds/${name}.${format}`);
  }

  getSpritePath(imageName: ImageNames, format: ImageFormat = 'png'): string {
    return `assets/sprites/${imageName}.${format}`;
  }

  // private getAtlasPath(atlasName: AtlasNames): string {
  //   return `assets/atlases/${atlasName}.json`;
  // }
}
