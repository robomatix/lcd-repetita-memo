var Square = function (game, x, y, key, frame) {

    key = 'square';

    Phaser.Sprite.call(this, game, x, y, key, frame);

    this.anchor.setTo(0.5);
    this.tint = this.game.mainTint;
    this.smoothed = false;


};

Square.prototype = Object.create(Phaser.Sprite.prototype);
Square.prototype.constructor = Square;

Square.prototype.destroyThis = function () {

    this.destroy();
    console.log('destroyThis');

};