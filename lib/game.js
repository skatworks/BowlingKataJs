class Game {

	constructor() {
		this.rolls = [];
        this.currentIndex = 0;
	}
	
	roll(pins) {
		this.rolls[this.currentIndex++] = pins;
	}
	
	getScore() {
        var score = 0;
        var frameIndex = 0;
        var self = this;
        for (let frame = 0; frame < 10; frame++) {
            if (self.rolls[frameIndex] === 10) {
                score += 10 + self.rolls[frameIndex + 1] + self.rolls[frameIndex + 2];
                frameIndex += 1;
            } else if (self.rolls[frameIndex] + self.rolls[frameIndex + 1] === 10) {
                score += 10 + self.rolls[frameIndex + 2];
                frameIndex += 2;
            } else {
                score += self.rolls[frameIndex] + self.rolls[frameIndex + 1];
                frameIndex += 2;
            }
        }
		return score;
	}
}

module.exports = Game;
