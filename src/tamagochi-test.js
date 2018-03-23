require('should');
const tamagochi = require('./tamagochi.js');


describe("tamagochi", () => {
  it("can have hunger", () => {
    const t = new tamagochi();
    should.exist(t.hungry);
  });
});

