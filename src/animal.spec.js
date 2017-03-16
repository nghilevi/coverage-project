/**
 * Created by lvn on 28/08/16.
 */

var animal = require("./animal.js");

describe('animal', function() {

    it('should be able to open mounth', function () {
        expect(animal.openMouth()).toBe('openMouth');
    });

});