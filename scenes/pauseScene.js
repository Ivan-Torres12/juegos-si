export class PauseScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PauseScene' });
    }

    create() {
        this.cameras.main.setBackgroundColor('rgba(0, 0, 0, 0.5)');

        this.add.text(this.scale.width / 2, this.scale.height / 2 - 100, 'Pausa', { fontSize: '64px', fill: '#ffffff' }).setOrigin(0.5);

        let resumeButton = this.add.text(this.scale.width / 2, this.scale.height / 2, 'Reanudar', { fontSize: '32px', fill: '#ffffff' }).setOrigin(0.5);
        resumeButton.setInteractive({ useHandCursor: true });
        resumeButton.on('pointerdown', () => {
            this.scene.resume('Nivel1');
            this.scene.stop();
        });

        let mainMenuButton = this.add.text(this.scale.width / 2, this.scale.height / 2 + 100, 'Menu', { fontSize: '32px', fill: '#ffffff' }).setOrigin(0.5);
        mainMenuButton.setInteractive({ useHandCursor: true });
        mainMenuButton.on('pointerdown', () => {
            this.scene.stop('Nivel1');
            this.scene.stop('PauseScene');
            this.scene.start('start');
        });
    }
}
