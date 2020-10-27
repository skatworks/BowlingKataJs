var chai = require('chai');
var expect = chai.expect
var Game = require('../lib/game');
//var should = chai.should();

describe("Game", function() {

	it("gutter game", function() {
		let game = new Game();
		for (let i = 0; i < 20; i++) {
			game.roll(0);
		}
		expect(game.getScore()).to.equal(0);
	});

	it("all 1pin game", function() {
		let game = new Game();
		for (let i = 0; i < 20; i++) {
			game.roll(1);
		}
		expect(game.getScore()).to.equal(20);
	});

});
