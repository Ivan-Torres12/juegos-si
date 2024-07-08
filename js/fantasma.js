export class enemigo2 {
    constructor(scene, x, y){
        this.myScene= scene
    }

    preload(){
        this.myScene.load.spritesheet('fantasma', '../assets/img/enemigos/fantasmin-export.png', { frameWidth: 94, frameHeight: 107 }
    );
    }

    create(){
        this.myScene.anims.create({
            key: 'flotar',
            frames: this.myScene.anims.generateFrameNumbers('fantasma', { start: 0, end: 5 }),
            frameRate: 4,
            repeat: -1
        });



        this.fantasma = this.myScene.physics.add.sprite(500,200, 'flotar')
        this.fantasma.body.setSize(94,107);
        this.fantasma.body.setOffset(1, 1);
        this.fantasma.setBounce(0.2);
        this.fantasma.setCollideWorldBounds(true);
        this.fantasma.flipX=true
        
        this.keyX = this.myScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);

    }

    update(){
        if(this.keyX.isDown){
            this.fantasma.play('flotar',false)
            
        }else{
            this.fantasma.play('flotar',true)
        }

    }
}
