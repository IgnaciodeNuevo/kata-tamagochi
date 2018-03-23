class tamagochi {
  constructor() {
    this.hungry = 100;
    this.fullness = 0;
    this.feeded = false;
  }

  feed(quantity) {
    this.hungry = this.hungry - quantity;
    this.fullness = this.fullness + quantity;
    if (this.hungry === 0) {
      this.feeded = true;
    }
  }
}

module.exports = tamagochi;
