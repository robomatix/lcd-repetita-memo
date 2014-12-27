repetita.MainMenu = function() {};

repetita.MainMenu.prototype = {
    create: function() {

        this.gameTitleText = this.game.add.bitmapText(0,0, 'mainFont', 'REPETITA', 240);
        this.gameTitleText.x = this.game.width / 2 - this.gameTitleText.textWidth / 2;
        this.gameTitleText.y = this.game.height / 2- this.gameTitleText.height / 2;
        this.gameTitleText.tint = 0x165016;

    },
    update: function() {

    }
};