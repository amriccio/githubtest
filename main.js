var game = new Phaser.Game();

'use strict';

game.state.add('startupScreen', startupScreen);
game.state.start('startupScreen');