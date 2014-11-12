;(function(){
  'use strict';

  describe('Adding Decimals', function(){
  });
  describe('Subtracting Decimals', function(){
  });
  describe('Dividing Decimals', function(){
  });
  describe('Signed decimals', function(){
  });
  describe('Creating a Decimal from a float', function(){
  });

  describe('Multiplying Decimals', function(){
    describe('2 * 3', function(){
      it('should be 6', function(){
        var a = new Decimal('2');
        var b = new Decimal('3');
        var result = a.times(b);
        assert.equal(result.toString(), '6');
      });
    });

    describe('1 * . 2 = .2', function(){
      it('should be .2', function(){
        var a = new Decimal('1');
        var b = new Decimal('.2');
        var result = a.times(b);
        assert.equal(result.toString(), '0.2');
      });
    });

    describe('. 1 2 5 * . 5 =', function(){
      it('should be .0625', function(){
        var a = new Decimal('.125');
        var b = new Decimal('.5');
        var result = a.times(b);
        assert.equal(result.toString(), '0.0625');
      });
    });

    describe('0 * 3 =', function(){
      it('should be .0', function(){
        var a = new Decimal('0');
        var b = new Decimal('3');
        var result = a.times(b);
        assert.equal(result.toString(), '0');
      });
    });

    describe('3 . 1 4 * 0 =', function(){
      it('should be .0', function(){
        var a = new Decimal('3.14');
        var b = new Decimal('0');
        var result = a.times(b);
        assert.equal(result.toString(), '0');
      });
    });

    describe('3 . 1 4 * . 0 =', function(){
      it('should be 0', function(){
        var a = new Decimal('3.14');
        var b = new Decimal('0');
        var result = a.times(b);
        assert.equal(result.toString(), '0');
      });
    });

    describe('3 * 4 * 2 =', function(){
      it('should be 24', function(){
        var a = new Decimal('3');
        var b = new Decimal('4');
        var c = new Decimal('2');
        var result = a.times(b).times(c);
        assert.equal(result.toString(), '24');
      });
    });

    xdescribe('3 * 4 + 2 =', function(){
      it('should be 14', function(){
        var a = new Decimal('3');
        var b = new Decimal('4');
        var c = new Decimal('2');
        var result = a.times(b).plus(c);
        assert.equal(result.toString(), '14');
      });
    });

    xdescribe('7 + 6 * 5 =', function(){
      it('should be 65', function(){
        var a = new Decimal('7');
        var b = new Decimal('6');
        var c = new Decimal('5');
        var result = a.plus(b).times(c);
        assert.equal(result.toString(), '65');
      });
    });

    xdescribe('3 * 0 * 2 =', function(){
      it('should be 0', function(){
        var a = new Decimal('3');
        var b = new Decimal('0');
        var c = new Decimal('2');
        var result = a.times(b).times(c);
        assert.equal(result.toString(), '0');
      });
    });
  });

  describe('String representation of Decimal', function(){
    describe('3', function(){
      it('should be 3', function(){
        var num = new Decimal("3");
        assert.equal(num.toString(), "3");
      });
    });
    describe('4.05', function(){
      it('should be 4.05', function(){
        var num = new Decimal("4.05");
        assert.equal(num.toString(), "4.05");
      });
    });
  });
})();
