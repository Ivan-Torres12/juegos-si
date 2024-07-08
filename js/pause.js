// pauseScene.js
export class Pausa extends Phaser.Scene {
    constructor() {
        super({ key: 'pausa' });
    }

    create() {
        // Fondo semi-transparente
        this.cameras.main.setBackgroundColor('rgba(0, 0, 0, 0.5)');

        // Texto de "Pausa"
        this.add.text(this.scale.width / 2, this.scale.height / 2 - 100, 'Pausado', { fontSize: '64px', fill: '#ffffff' }).setOrigin(0.5);

        // Botón para reanudar
        let resumeButton = this.add.text(this.scale.width / 2, this.scale.height / 2, 'Seguir', { fontSize: '32px', fill: '#ffffff' }).setOrigin(0.5);
        resumeButton.setInteractive({ useHandCursor: true });
        resumeButton.on('pointerdown', () => {
            this.scene.resume('level1');
            this.scene.stop(); // Detener la escena de pausa
        });

        // Botón para volver al menú principal
        let mainMenuButton = this.add.text(this.scale.width / 2, this.scale.height / 2 + 100, 'Menu', { fontSize: '32px', fill: '#ffffff' }).setOrigin(0.5);
        mainMenuButton.setInteractive({ useHandCursor: true });
        mainMenuButton.on('pointerdown', () => {
            this.scene.stop('level1');
            this.scene.stop('pausa');
            this.scene.start('start');
        });
    }
}
