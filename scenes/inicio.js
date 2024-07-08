export class Star extends Phaser.Scene{
    constructor(){
        super({key: 'start'})
    }

    preload(){
        this.load.image('dimeloMansana', '../assets/img/fondo/images (1).jpg')
        this.load.image('donas', '../assets/img/fondo/images.jpg')
    }

    create(){
        this.add.image(400, 200, 'dimeloMansana')
        this.boton = this.add.image(20,20, 'donas').setInteractive()
        this.boton.on('pointerup',()=>{
            this.scene.start('Nivel1')
        })
    }
}