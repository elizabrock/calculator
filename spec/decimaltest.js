;(function(){
  'use strict';

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
  describe('Multiplying Decimals', function(){
  });
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
})();
