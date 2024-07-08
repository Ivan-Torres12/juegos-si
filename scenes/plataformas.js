export class Plataformas{
    constructor(scene){
        this.myScene = scene
    }

    preload(){
        this.myScene.load.image('tiles', '../assets/img/tilesets/world_tileset.png')
        this.myScene.load.tilemapTiledJSON('tilemapJSON', '../json/Level1.json')
    }

    create(){
        this.map = this.myScene.make.tilemap({key: 'tilemapJSON'})
        this.tileset = this.map.addTilesetImage('patron1','tiles')
        this.layer1 = this.map.createLayer("Plataformas", this.tileset, 0, 0)
        this.layer2 = this.map.createLayer("Cielo", this.tileset, 0, 0)
        this.layer1.setCollisionByProperty({ collision: true });

    }
}