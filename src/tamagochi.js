class tamagochi {
  constructor() {
    this.hungry = 100;
    this.fullness = 0;
    this.feeded = false;
    this.remaindingFood = 0;
    this.happiness = 0;
    this.tiredness = 0;
  }

  feed(quantity) {
    this.hungry = this.hungry - quantity;
    this.fullness = this.fullness + quantity;

    if (this.hungry < 0) {
      this.remaindingFood = Math.abs(this.hungry);
      this.hungry = 0;
    }

    if (this.hungry === 0) {
      this.feeded = true;
    }
  }

  play(quantity) {
    this.happiness = Math.min(this.happiness + quantity, 100);
    this.tiredness = Math.min(this.tiredness + quantity, 100);
  }
}

module.exports = tamagochi;
