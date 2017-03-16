/**
 * Created by lvn on 28/08/16.
 */

var animal = require("./animal.js");

function say() {
    animal.openMouth();
    return 'woof';
}

module.exports = {
    say: say
};