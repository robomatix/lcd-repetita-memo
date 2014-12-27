repetita.MainMenu = function() {};

repetita.MainMenu.prototype = {
    create: function() {

        this.gameTitleText = this.game.add.bitmapText(0,0, 'mainFont', 'Repetita', 120);
        this.gameTitleText.x = this.game.width / 2 - this.gameTitleText.textWidth / 2;
        this.gameTitleText.y = this.game.height / 2- this.gameTitleText.height / 2;

    },
    update: function() {

    }
};