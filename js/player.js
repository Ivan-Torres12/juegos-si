export class Player {
    constructor(scene, x, y) {
        this.myScene = scene;
    }
    preload(){
        
        this.myScene.load.spritesheet('corre-Sheet', '../assets/img/player/corre-Sheet.png', { frameWidth: 62, frameHeight: 81 });
        this.myScene.load.spritesheet('stun-Sheet', '../assets/img/player/stun-Sheet.png', { frameWidth: 44, frameHeight: 78 });
        this.myScene.load.spritesheet('ataque','../assets/img/player/adris2a-Sheet.png',{ frameWidth:270, frameHeight: 153 });
    }

    create(){
        this.myScene.anims.create({
            key: 'run',
            frames: this.myScene.anims.generateFrameNumbers('corre-Sheet', { start: 0, end: 9 }),
            frameRate: 15,
            repeat: -1
        })

        this.myScene.anims.create({
            key: 'stun',
            frames: this.myScene.anims.generateFrameNumbers('stun-Sheet', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1
        })

        this.myScene.anims.create({
            key: 'atak', frames: this.myScene.anims.generateFrameNumbers('ataque', {start: 0, end: 23}), frameRate:15, repeat:-1
        })

    

        this.Player = this.myScene.physics.add.sprite(100,200, 'stun')
        this.Player.body.setSize(44,77);
        this.Player.body.setOffset(this.Player.width * 0.3, this.Player.height * 1);
        this.Player.setBounce(0.2);
        this.Player.setCollideWorldBounds(true);
        

        this.cursors = this.myScene.input.keyboard.createCursorKeys();
        this.keyW = this.myScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyA = this.myScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.myScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyS = this.myScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }

    update() {
        if (this.keyD.isDown) {
            this.Player.setVelocityX(230);
            this.Player.play('run', true);
            this.Player.flipX = false;
        } else if (this.keyA.isDown) {
            this.Player.setVelocityX(-230);
            this.Player.play('run', true);
            this.Player.flipX = true;
        } else if(this.keyS.isDown){
            this.Player.play('atak',true)
        }else {
            this.Player.body.setOffset(1, 1);
            this.Player.setVelocityX(0);
            this.Player.play('stun', true);
        }

        if (this.keyW.isDown) {
            this.Player.setVelocityY(-300);
        }

        
    }
}
