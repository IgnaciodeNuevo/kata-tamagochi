require('should');
const tamagochi = require('./tamagochi.js');


describe("tamagochi", () => {
  it("can have hunger", () => {
    const t = new tamagochi();
    should.exist(t.hungry);
  });

  it("can be feeded", () => {
    const t = new tamagochi();
    t.feed(50);
    t.hungry.should.equal(50);
  });
});

