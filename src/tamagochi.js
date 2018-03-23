class tamagochi {
  constructor() {
    this.hungry = 100;
    this.fullness = 0;
    this.feeded = false;
    this.remaindingFood = 0;
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
}

module.exports = tamagochi;
