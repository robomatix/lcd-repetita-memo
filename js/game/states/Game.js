repetita.Game = function () {
// VARS
};

repetita.Game.prototype = {
    create: function () {

        this.gameStartText = this.game.add.bitmapText(0, 0, 'mainFont', 'GAME !!!', 44);
        this.gameStartText.x = this.game.width / 2 - this.gameStartText.textWidth / 2;
        this.gameStartText.y = this.game.height / 2 - this.gameStartText.textHeight / 2;
        this.gameStartText.tint = 0x165016;

        this.simon = this.game.add.group();


        for (var i = 0; i < 16; i++) {

            var x, y, square, squareScale;

            x = this.game.rnd.integerInRange(50, this.game.world.width - 50);
            y = this.game.rnd.integerInRange(50, this.game.world.height - 50);
            squareScale = this.game.rnd.integerInRange(1, 4);

            square = new Square(this.game, x, y);
            square.scale.setTo(squareScale);
            this.simon.add(square);

            // For the next step : no squares overlaping -> http://docs.phaser.io/Phaser.Physics.Arcade.html#overlap

        }


    },
    update: function () {

        if(this.game.input.activePointer.justPressed()) {

            this.game.state.start('Game');

        }

    },
    shutdown: function () {

    }

};