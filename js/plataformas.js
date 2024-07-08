export class Plataformas{
    constructor(scene){
        this.myScene = scene
    }

    preload(){
        this.myScene.load.image('tiles', '../assets/img/tileset/world_tileset.png')
        this.myScene.load.tilemapTiledJSON('tilemapJSON', '../json/mapa4.json')
    }

    create(){
        this.map = this.myScene.make.tilemap({key: 'tilemapJSON'})
        this.tileset = this.map.addTilesetImage('tileset','tiles')
        this.layer1 = this.map.createLayer("Capa de patrones 1", this.tileset, 0, 0)
        this.layer1.setCollisionByProperty({ collision: true });
    }
}