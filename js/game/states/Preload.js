repetita.Preload = function() {
    this.ready = false;
};

repetita.Preload.prototype = {

    preload: function() {

        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
        this.preloadBar.anchor.setTo(0.5);

        this.load.setPreloadSprite(this.preloadBar);

        this.load.bitmapFont('mainFont', 'assets/fonts/kubasta-36-white/font.png', 'assets/fonts/kubasta-36-white/font.fnt');

        this.load.onLoadComplete.add(this.onLoadComplete, this);

    },
    create: function() {

        this.preloadBar.cropEnabled = false;

    },
    update: function() {

        if(this.ready === true) {
            this.state.start('MainMenu');
        }

    },
    onLoadComplete: function() {

        this.ready = true;

    }

};