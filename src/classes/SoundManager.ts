import { SoundNames } from '../constants/names';
import BaseScene from '../scenes/BaseScene';
import { SoundsType } from '../types/commonTypes';

import battlmusic1 from '../../assets/sounds/battle_music1.ogg';
import battlmusic2 from '../../assets/sounds/battle_music2.ogg';
import battlmusic3 from '../../assets/sounds/battle_music3.wav';
import mainTheme from '../../assets/sounds/main_theme.wav';

// eslint-disable-next-line import/no-mutable-exports
export let sounds: SoundsType;

export default class SoundManager {
  static loadAllSound(scene: BaseScene) {
    scene.load.audio(SoundNames.battle_music1, battlmusic1);
    scene.load.audio(SoundNames.battle_music2, battlmusic2);
    scene.load.audio(SoundNames.battle_music3, battlmusic3);
    scene.load.audio(SoundNames.main_theme, mainTheme);
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
