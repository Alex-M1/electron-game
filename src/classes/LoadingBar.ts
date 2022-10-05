import { APP_SIZE } from '../constants/configs';

export default class LoadingBar {
  private scene: Phaser.Scene;
  private style: {
    boxColor: number;
    barColor: number;
    x: number;
    y: number;
    width: number;
    height: number;
  };
  private progressBox: Phaser.GameObjects.Graphics;
  private progressBar: Phaser.GameObjects.Graphics;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.style = {
      boxColor: 0xD3D3D3,
      barColor: 0xFF8FC,
      x: APP_SIZE.width / 2 - 450,
      y: APP_SIZE.height / 2 + 250,
      width: 900,
      height: 25,
    };

    this.progressBox = this.scene.add.graphics();
    this.progressBar = this.scene.add.graphics();
  }

  init() {
    this.setEvents();
    this.showProgressBox();
  }

  private setEvents() {
    this.scene.load.on('progress', this.showProgressBar, this);
    this.scene.load.on('fileprogress', this.onFileProgress, this);
    this.scene.load.on('complete', this.onLoadComplete, this);
  }

  private showProgressBox() {
    this.progressBox
      .fillStyle(this.style.boxColor)
      .fillRect(this.style.x, this.style.y, this.style.width, this.style.height);
  }

  private showProgressBar(value: number) {
    this.progressBar
      .clear()
      .fillStyle(this.style.barColor)
      .fillRect(this.style.x, this.style.y, this.style.width * value, this.style.height);
  }
  private onFileProgress() { }

  private onLoadComplete() {
    this.progressBar.destroy();
    this.progressBox.destroy();
  }
}
