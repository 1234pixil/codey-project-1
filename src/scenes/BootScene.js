export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    // Placeholder: no external assets, but you can load images here
    // this.load.image('player', 'assets/sprites/player.png');
    // this.load.image('platform', 'assets/sprites/platform.png');
  }

  create() {
    this.scene.start('GameScene');
  }
}
