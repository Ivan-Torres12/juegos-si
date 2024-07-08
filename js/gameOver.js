export class GameOverScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOverScene' });
    }

    create() {
        // Fondo semi-transparente
        this.cameras.main.setBackgroundColor('rgba(0, 0, 0, 0.5)');

        // Texto de "Game Over"
        this.add.text(this.scale.width / 2, this.scale.height / 2 - 100, 'Game Over', { fontSize: '64px', fill: '#ff0000' }).setOrigin(0.5);

        // Texto de instrucción
        this.add.text(this.scale.width / 2, this.scale.height / 2 + 100, 'Press Enter to Restart', { fontSize: '32px', fill: '#ffffff' }).setOrigin(0.5);

        // Detectar la tecla Enter para reiniciar el nivel
        this.input.keyboard.on('keydown-ENTER', () => {
            this.scene.stop('GameOverScene'); // Detener la escena de Game Over
            this.scene.stop('level1'); // Detener la escena del nivel actual
            this.scene.start('level1'); // Reiniciar el nivel
        });
    }
}
