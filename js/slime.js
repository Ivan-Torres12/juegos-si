export class enemigo1 {
    constructor(scene, x, y){
        this.myScene= scene
    }

    preload(){
        this.myScene.load.spritesheet('slime', '../assets/img/enemigos/slime2-Sheet-export-export.png', { frameWidth: 30, frameHeight: 64 }
    );
    }

    create(){
        this.myScene.anims.create({
            key: 'salto',
            frames: this.myScene.anims.generateFrameNumbers('slime', { start: 0, end: 4 }),
            frameRate: 6,
            repeat: -1
        });



        this.slime = this.myScene.physics.add.sprite(200,200, 'salto')
        this.slime.body.setSize(30,64);
        this.slime.body.setOffset(1, 1);
        this.slime.setBounce(0.2);
        this.slime.setCollideWorldBounds(true);

        this.slime.flipX=true;
        this.keyX = this.myScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);

    }

    update(){
        if(this.keyX.isDown){
            this.slime.play('salto',false)
        }else{
            this.slime.play('salto',true)
        }

    }
}
