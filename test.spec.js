const assert = require('assert');
const roman = require('./');

describe('digitConverter function', () => {
  it('should return II when passed 2', () => {
    assert.equal('II', roman.digitConverter(2, 0));
  });
  it('should return IV when passed 4', () => {
    assert.equal('IV', roman.digitConverter(4, 0));
    assert.equal('XL', roman.digitConverter(4, 1));
  });
  it('should return V when passed 5', () => {
    assert.equal('V', roman.digitConverter(5, 0));
  });
  it('should return VII when passed 7', () => {
    assert.equal('VI', roman.digitConverter(6, 0));
    assert.equal('VII', roman.digitConverter(7, 0));
    assert.equal('VIII', roman.digitConverter(8, 0));
  });
  it('should return IX when passed 9', () => {
    assert.equal('IX', roman.digitConverter(9, 0));
  });
  it('should return CM when passed 9, 2', () => {
    assert.equal('CM', roman.digitConverter(9, 2));
  });
});


describe('numberConverter function', () => {
  it('should return II when passed 2', () => {
    assert.equal('II', roman.numberConverter(2));
  });
  it('should return X when passed 10', () => {
    assert.equal('X', roman.numberConverter(10));
  });
  it('should return L when passed 50', () => {
    assert.equal('L', roman.numberConverter(50));
  });
  it('should return C when passed 100', () => {
    assert.equal('C', roman.numberConverter(100));
  });
  it('should return D when passed 500', () => {
    assert.equal('D', roman.numberConverter(500));
  });
  it('should return M when passed 1000', () => {
    assert.equal('M', roman.numberConverter(1000));
  });
  it('should return MCXII when passed 1112', () => {
    assert.equal('MCXII', roman.numberConverter(1112));
  });
  it('should return MMM when passed 3000', () => {
    assert.equal('MMM', roman.numberConverter(3000));
  });
  it('should return MMCMXCVII when passed 2947', () => {
    assert.equal('MMCMXLVII', roman.numberConverter(2947));
  });

});

module.exports.roman = roman;