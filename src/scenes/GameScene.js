export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  create() {
    // Create a simple pixelated background
    this.cameras.main.setBackgroundColor('#87ceeb');

    // Create static platforms group
    this.platforms = this.physics.add.staticGroup();

    // Ground
    this.platforms.create(400, 590, null).setScale(2).refreshBody();

    // Floating platforms
    this.platforms.create(200, 450, null).setScale(1.5).refreshBody();
    this.platforms.create(600, 350, null).setScale(1.5).refreshBody();

    // Create player as a simple rectangle
    this.player = this.add.rectangle(100, 450, 32, 48, 0x00ff00);
    this.physics.add.existing(this.player);
    this.player.body.setCollideWorldBounds(true);

    // Collide player with platforms
    this.physics.add.collider(this.player, this.platforms);

    // Input
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    const speed = 200;
    const jumpSpeed = -400;

    // Horizontal movement
    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-speed);
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(speed);
    } else {
      this.player.body.setVelocityX(0);
    }

    // Jump
    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.body.setVelocityY(jumpSpeed);
    }
  }
}
