import { Player } from "./player.js"
import { Plataformas } from "./plataformas.js"
import { enemigo1 } from "./slime.js"
import { enemigo2 } from "./fantasma.js"

export class Level1 extends Phaser.Scene{
    constructor(){
        super({
            key: "level1"
        })
        this.player = new Player(this)
        this.Plataformas = new Plataformas(this)
        this.enemigo1 = new enemigo1(this)
        this.enemigo2=new enemigo2(this)
    }

    preload(){
        this.load.image('fondo', '../assets/img/fondo/fondo_rojo.jpeg')
        
        this.Plataformas.preload()
        
        this.player.preload()

        this.enemigo1.preload()

        this.enemigo2.preload()
    }

    create(){
        this.fondo = this.add.image(0, 0, 'fondo').setOrigin(0, 0)
        this.fondo.displayWidth = this.sys.game.config.width
        this.fondo.displayHeight = this.sys.game.config.height
                
        this.Plataformas.create()
        
        this.player.create()

        this.enemigo1.create()

        this.enemigo2.create()
        
        this.physics.add.collider(this.player.Player, this.Plataformas.layer1)

        this.physics.add.collider(this.enemigo1.slime, this.Plataformas.layer1)

        this.physics.add.collider(this.enemigo2.fantasma, this.Plataformas.layer1)

        this.physics.add.collider(this.player.Player, [this.enemigo1.slime, this.enemigo2.fantasma], this.handleCollision, null, this);

        this.cameras.main.setBounds(0, 0, 800, 502);
        this.cameras.main.startFollow(this.player.Player);
        this.cameras.main.setZoom(1.5);
        this.cameras.main.setLerp(0.1, 0.1);

        this.input.keyboard.on('keydown-ESC', () => {
            this.scene.launch('pausa');
            this.scene.pause();
        });

    }

    handleCollision(player, enemy) {
        // Pausa el juego
        this.scene.pause('level1');

        // Muestra la pantalla de Game Over
        this.scene.launch('GameOverScene');
    }

    update(){

        this.player.update()
        this.enemigo1.update()
        this.enemigo2.update()
        
        
    }
}