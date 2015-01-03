repetita.MainMenu = function() {};

repetita.MainMenu.prototype = {
    create: function() {

        this.gameStartText = this.game.add.bitmapText(0,0, 'mainFont', 'Click to start', 44);
        this.gameStartText.x = this.game.width / 2 - this.gameStartText.textWidth / 2;
        this.gameStartText.y = this.game.height / 2- this.gameStartText.textHeight / 2;
        this.gameStartText.tint = this.game.mainTint;

        this.gameTitleText = this.game.add.bitmapText(0,0, 'mainFont', 'REPETITA', 58);
        this.gameTitleText.x = this.game.width / 2 - this.gameTitleText.textWidth / 2;
        this.gameTitleText.y = this.gameStartText.y - 120;
        this.gameTitleText.tint = this.game.mainTint;

    },
    update: function() {

        if(this.game.input.activePointer.justPressed()) {

            this.game.state.start('Game');

        }

    }
};