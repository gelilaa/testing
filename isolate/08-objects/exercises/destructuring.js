'use strict';

const expect = chai.expect;

describe('destructuring', () => {
  it('types of tasty treats', () => {
    const { dry, wet } = {
      wet: 'soup',
      dry: 'bread'
    };
    expect(obj.dry).to.eql(dry);
    expect(wet).to.eql('soup');
  });
  it('a menagerie', () => {
    const hairiest = 'cheetah';
    const oceanic = 'swimming';
    const obj = {
      [oceanic]: 'mackerel',
      running: hairiest
    };
    const birdy = 'flying';
    obj[birdy] = 'huh?';
    const {swimming, flying, running } = obj;
    expect(flying).to.eql('huh?');
    expect(running).to.eql('cheetah');
    expect(swimming).to.eql('mackerel')
  });
});
