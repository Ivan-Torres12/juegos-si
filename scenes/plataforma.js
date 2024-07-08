// Plataformas.js
export class Plataformas {
    constructor(scene) {
        this.myScene = scene;
    }

    preload() {
        this.myScene.load.image('tiles', '../assets/img/tileset/world_tileset.png');
        this.myScene.load.tilemapTiledJSON('tilemapJSON', '../json/mapa4.json');
    }

    create() {
        this.map = this.myScene.make.tilemap({ key: 'tilemapJSON' });
        this.tileset = this.map.addTilesetImage('tileset', 'tiles');
        this.layer1 = this.map.createLayer("Capa de patrones 1", this.tileset, 0, 0);

        // Ajuste de los límites del mundo
        this.layer1.setCollisionByProperty({ collision: true });

        // Añadir colisiones y límites del mundo
        this.myScene.physics.world.setBounds(0, 0, this.layer1.width, this.layer1.height);

        // Renderizado de debug para las colisiones
        const debugGraphics = this.myScene.add.graphics().setAlpha(0.7);
        this.layer1.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
            faceColor: new Phaser.Display.Color(40, 39, 37, 255)
        });
    }
}