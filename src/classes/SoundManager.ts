import { SoundNames } from '../constants/names';
import BaseScene from '../scenes/BaseScene';
import { SoundsType } from '../types/commonTypes';

// eslint-disable-next-line import/no-mutable-exports
export let sounds: SoundsType;

export default class SoundManager {
  static loadAllSound(scene: BaseScene) {
    scene.loadSounds(SoundNames.battle_music1, 'ogg');
    scene.loadSounds(SoundNames.battle_music2, 'ogg');
    scene.loadSounds(SoundNames.battle_music3, 'wav');
    scene.loadSounds(SoundNames.main_theme, 'wav');
  }

  static creatSounds(scene: BaseScene) {
    if (!sounds) {
      sounds = {
        battle_music1: scene.sound.add(SoundNames.battle_music1),
        battle_music2: scene.sound.add(SoundNames.battle_music2),
        battle_music3: scene.sound.add(SoundNames.battle_music3),
        main_theme: scene.sound.add(SoundNames.main_theme),
      };
    }
  }
}
