(function (window) {

    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    window.opspark.makeApp = function (update) {
        var _canvas = document.getElementById('canvas');
        var _stage = new createjs.Stage(canvas);

        var _app = {
            canvas: _canvas,
            stage: _stage,
            view: new createjs.Container(),

            onTick: function(e) {
                update();
                _stage.update();
            }
        }
        _app.stage.addChild(draw.rect(canvas.width, canvas.height, null, '#4F5661', 1));
        _app.stage.addChild(_app.view);
        createjs.Ticker.setFPS(60);
        createjs.Ticker.on('tick', _app.onTick);

        return _app;
    }
}(window));