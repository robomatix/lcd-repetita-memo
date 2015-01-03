repetita.Game = function () {
// VARS
};

repetita.Game.prototype = {
    create: function () {

        this.gameStartText = this.game.add.bitmapText(0, 0, 'mainFont', 'GAME !!!', 44);
        this.gameStartText.x = this.game.width / 2 - this.gameStartText.textWidth / 2;
        this.gameStartText.y = this.game.height / 2 - this.gameStartText.textHeight / 2;
        this.gameStartText.tint = 0x165016;

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.simon = this.game.add.group();

        var i = 0;
        while ( i < 18 ) {

            var x, y, squareScale, square;

            x = this.game.rnd.integerInRange(50, this.game.world.width - 50);
            y = this.game.rnd.integerInRange(50, this.game.world.height - 50);
            squareScale = this.game.rnd.integerInRange( 1, 4 );


            square = new Square(this.game, x, y);

            square.scale.setTo(squareScale);

            this.game.physics.enable([square], Phaser.Physics.ARCADE);

            if (!this.game.physics.arcade.overlap(square, this.simon)) {

                this.simon.add(square);
                console.log('NO overlap');
                i++;

            } else {

                console.log('OOOOOverlap');
                square.tint=0xff0000;
                square.destroyThis();

            }

        }


    },
    update: function () {

        if (this.game.input.activePointer.justPressed()) {

            this.game.state.start('Game');

        }

    },
    shutdown: function () {

        this.simon.destroy();

    }

};