var bowser = require('bowser');

describe('copy/cut', function() {
    if (bowser.chrome) {
        if (bowser.version >= 43) {
            it('copy should be supported on Chrome 43+', function() {
                assert.equal(document.queryCommandSupported('copy'), true);
            });

            it('cut should be supported on Chrome 43+', function() {
                assert.equal(document.queryCommandSupported('cut'), true);
            });
        }
        else {
            it('copy should not be supported on Chrome 42-', function() {
                assert.equal(document.queryCommandSupported('copy'), false);
            });

            it('cut should not be supported on Chrome 42-', function() {
                assert.equal(document.queryCommandSupported('cut'), false);
            });
        }
    }

    if (bowser.opera) {
        if (bowser.version >= 30) {
            it('copy should be supported on Opera 30+', function() {
                assert.equal(document.queryCommandSupported('copy'), true);
            });

            it('cut should be supported on Opera 30+', function() {
                assert.equal(document.queryCommandSupported('cut'), true);
            });
        }
        else {
            it('copy should not be supported on Opera 29-', function() {
                assert.equal(document.queryCommandSupported('copy'), false);
            });

            it('cut should not be supported on Opera 29-', function() {
                assert.equal(document.queryCommandSupported('cut'), false);
            });
        }
    }

    if (bowser.firefox) {
        if (bowser.version >= 41) {
            it('copy should be supported on Firefox 41+', function() {
                assert.equal(document.queryCommandSupported('copy'), true);
            });

            it('cut should be supported on Firefox 41+', function() {
                assert.equal(document.queryCommandSupported('cut'), true);
            });
        }
        else {
            it('copy should not be supported on Firefox 40-', function() {
                assert.equal(document.queryCommandSupported('copy'), false);
            });

            it('cut should not be supported on Firefox 40-', function() {
                assert.equal(document.queryCommandSupported('cut'), false);
            });
        }
    }

    if (bowser.safari || bowser.ios) {
        it('copy should not be supported on Safari', function() {
            assert.equal(document.queryCommandSupported('copy'), false);
        });

        it('cut should not be supported on Safari', function() {
            assert.equal(document.queryCommandSupported('cut'), false);
        });
    }

    if (bowser.msie || bowser.msedge) {
        it('copy should be supported on IE', function() {
            assert.equal(document.queryCommandSupported('copy'), true);
        });

        it('cut should be supported on IE', function() {
            assert.equal(document.queryCommandSupported('cut'), true);
        });
    }
});
