/**
 * Created by lvn on 28/08/16.
 */

var dog = require("./dog.js");

describe('dog', function () {

    it('should be to say woof', function () {
        expect(dog.say()).toBe('woof');
    });

});