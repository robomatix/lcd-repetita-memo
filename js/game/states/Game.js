repetita.Game = function () {
// VARS
};

repetita.Game.prototype = {
    create: function () {

        this.gameStartText = this.game.add.bitmapText(0,0, 'mainFont', 'GAME !!!', 44);
        this.gameStartText.x = this.game.width / 2 - this.gameStartText.textWidth / 2;
        this.gameStartText.y = this.game.height / 2- this.gameStartText.textHeight / 2;
        this.gameStartText.tint = 0x165016;

    },
    update: function () {

    },
    shutdown: function () {

    }

};