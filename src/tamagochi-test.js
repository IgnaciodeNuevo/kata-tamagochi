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

  it("can be full of food", () => {
    const t = new tamagochi();
    t.feed(50);
    t.fullness.should.equal(50);
    t.feeded.should.equal(false);
  });

  it("can be totally feeded", () => {
    const t = new tamagochi();
    t.feed(100);
    t.fullness.should.equal(100);
    t.hungry.should.equal(0);
    t.feeded.should.equal(true);
  });

  it("can't be feeded if it's full", () => {
    const t = new tamagochi();
    t.feed(101);
    t.hungry.should.equal(0);
    t.remaindingFood.should.equal(1);
  });

});

