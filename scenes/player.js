export class Player {
    constructor(scene, x, y) {
        this.myScene = scene;
    }
    preload(){
        
        this.myScene.load.spritesheet('corre-Sheet', '../assets/img/player/corre-Sheet.png', { frameWidth: 62, frameHeight: 81 });
        this.myScene.load.spritesheet('stun-Sheet', '../assets/img/player/stun-Sheet.png', { frameWidth: 44, frameHeight: 78 });
    }

    create(){
        this.myScene.anims.create({
            key: 'run',
            frames: [('corre-Sheet', { start: 0, end: 9 })],
            frameRate: 15,
            repeat: -1
        })

        this.myScene.anims.create({
            key: 'stun',
            frames: [('stun-Sheet', { start: 0, end: 9 })],
            frameRate: 10,
            repeat: -1
        })

        this.Player = this.myScene.physics.add.sprite(100,200, 'stun')
        this.Player.body.setSize(this.Player.width * 0.4, this.Player.height * 0.6);
        this.Player.body.setOffset(this.Player.width * 0.3, this.Player.height * 0.1);
        this.Player.setBounce(0.2);
        this.Player.setCollideWorldBounds(true);


        this.cursors = this.myScene.input.keyboard.createCursorKeys();
        this.keyW = this.myScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyA = this.myScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.myScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.lastDirection = 'right';  // Almacena la última dirección del movimiento
    }

    update() {
        if (this.keyD.isDown) {
            this.Player.setVelocityX(160);
            this.Player.play('Run', true);
            this.Player.flipX = false;
            this.lastDirection = 'right';
        } else if (this.keyA.isDown) {
            this.Player.setVelocityX(-160);
            this.Player.play('Run', true);
            this.Player.flipX = true;
            this.lastDirection = 'left';
        } else {
            this.Player.setVelocityX(0);
            this.Player.play('stun', true);
        }

        // Control de salto
        if (this.keyW.isDown && this.Player.body.blocked.down) {
            this.Player.setVelocityY(-200);
        }
    }
}
