import { Sound } from 'phaser';
import { SoundNames } from '../constants/names';

export type ImageFormat = 'jpg' | 'png' | 'svg';
export type SoundFormat = 'wav' | 'mp3' | 'ogg';

export type SoundsType = Record<SoundNames, Sound.BaseSound>
