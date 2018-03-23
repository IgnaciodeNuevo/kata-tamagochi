class tamagochi {

  constructor() {
    this.hungry = 100;
    this.fullness = 0;
  }

  feed(quantity) {
    this.hungry = 50;
    this.fullness = 50;
  }

}

module.exports = tamagochi;
