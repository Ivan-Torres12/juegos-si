export class Enemigo {
    constructor(scene, x, y) {
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(x, y, 'slime');
        
        scene.anims.create({
            key: 'Run',
            frames: scene.anims.generateFrameNumbers('slime', { start: 0, end: 5 }),
            frameRate: 7,
            repeat: -1
        });

        this.sprite.play('Run');
        this.sprite.setBounce(1);
        this.sprite.setCollideWorldBounds(true);
        
    }

    update() {
        // Cualquier lógica de actualización específica del enemigo
    }
}
