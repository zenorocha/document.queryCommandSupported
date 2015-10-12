var bowser = require('bowser');

var _queryCommandSupported = document.queryCommandSupported;

document.queryCommandSupported = function(cmd) {
    if (cmd === 'copy' || cmd === 'cut') {
        if (bowser.chrome) {
            if (bowser.version >= 43) {
                return true;
            }
            else {
                return false;
            }
        }

        if (bowser.opera) {
            if (bowser.version >= 30) {
                return true;
            }
            else {
                return false;
            }
        }

        if (bowser.firefox) {
            if (bowser.version >= 41) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    return _queryCommandSupported.apply(this, arguments);
};
