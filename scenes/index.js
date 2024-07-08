import { Star } from './inicio.js';
import { Nivel1 } from './nivel1.js';
import { PauseScene } from './pauseScene.js';

// Dimensiones del mapa y del fondo (ejemplo, reemplaza con tus valores reales)
const mapWidth = 800;
const fondoHeight = 502; // Alto del fondo

// Calcula las dimensiones de la ventana del juego
const gameWidth = mapWidth;
const gameHeight = fondoHeight;

const config = {
    type: Phaser.AUTO,
    width: 800,  // Ancho de la ventana del juego
    height: 502,  // Alto de la ventana del juego
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [Star, Nivel1, PauseScene]
};

const game = new Phaser.Game(config);

window.addEventListener('resize', () => {
    game.scale.resize(window.innerWidth, window.innerHeight);
});
