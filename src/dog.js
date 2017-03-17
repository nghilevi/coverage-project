/**
 * Created by lvn on 28/08/16.
 */

var animal = require("./animal.js");
var dog = {
    say: function () {
        animal.openMouth();
        return 'woof';
    }
};

module.exports = dog;