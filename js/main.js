'use strict';

//global variables
window.onload = function () {
    var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

    // Game States
    game.state.add('Boot', repetita.Boot);
    game.state.add('Preload', repetita.Preload);
    game.state.add('MainMenu', repetita.MainMenu);
    game.state.add('Game', repetita.Game);


    game.state.start('Boot');
};