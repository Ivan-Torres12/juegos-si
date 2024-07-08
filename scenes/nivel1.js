import { Player } from './player.js';
import { Plataformas } from './plataforma.js';
import { Enemigo } from './testAnim.js';  // Importar la clase del enemigo

export class Nivel1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Nivel1' });
        this.plataformas = new Plataformas(this);
        this.player = new Player(this)
    }

    preload() {
        // Cargar imagen de fondo
        this.load.image('background', '../assets/img/fondo/fondo_rojo.jpeg');

        // Preload de plataformas
        
        this.plataformas.preload();

        this.player.preload();
        // Preload del enemigo
        this.load.spritesheet('slime', '../assets/img/enemigos/slime2-Sheet.png', { frameWidth: 32, frameHeight: 32 });
    }

    create() {
        // Agregar imagen de fondo y escalarla
        this.fondo = this.add.image(0, 0, 'background').setOrigin(0, 0);
        this.fondo.displayWidth = this.sys.game.config.width;
        this.fondo.displayHeight = this.sys.game.config.height;

        this.plataformas.create();


        this.player.create();

        this.enemigo = new Enemigo(this, 200, 400);  // Posicionar al enemigo en el mapa
        this.physics.add.collider(this.enemigo.sprite, this.plataformas.layer1);  // Añadir colisión con las plataformas
        

    }

    update() {
        // Actualizar el jugador
        this.player.update();
        // Actualizar el enemigo
        this.enemigo.update();
    }
}
