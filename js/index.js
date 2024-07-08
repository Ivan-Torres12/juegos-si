import { Start } from "./inicio.js"
import { Level1 } from "./level1.js"
import { Pausa } from "./pause.js"
import { GameOverScene } from "./gameOver.js"

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 502,
    scene: [Start, Level1, Pausa,GameOverScene],
    scale: {
        mode: Phaser.RESIZE,
        autoCenter: Phaser.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    },
}

let game = new Phaser.Game(config)