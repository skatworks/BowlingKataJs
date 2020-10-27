var chai = require('chai');
var expect = chai.expect
var Game = require('../lib/game');
//var should = chai.should();

describe("Game", function() {

    beforeEach(function() {
        game = new Game();
    });
    
	it("gutter game", function() {
        rollMany(20, 0);
		expect(game.getScore()).to.equal(0);
	});

	it("all 1pin game", function() {
        rollMany(20, 1);
		expect(game.getScore()).to.equal(20);
	});

    it("include spare game", function() {
        game.roll(5);
        game.roll(5);
        game.roll(3);
        game.roll(4);
        rollMany(16, 0);
        expect(game.getScore()).to.equal(20);
    });

    it("include strike game", function() {
        game.roll(10);
        game.roll(3);
        game.roll(4);
        rollMany(17, 0);
        expect(game.getScore()).to.equal(24);
    });

    it("perfect game", function() {
        rollMany(12, 10);
        expect(game.getScore()).to.equal(300);
    });
    
    function rollMany(n, pins) {
        for (let i = 0; i < n; i++) {
            game.roll(pins);
        }
    }
    
});
