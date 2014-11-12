function Decimal(initialValue){
  this.value = initialValue * 1;
  this.mantissa = initialValue.toString().match(/[^.]*\.?(\d*)/)[1].length;

  this.plus = function(addend){
    var sum = this.value + addend.value;
    var digits = Math.max(this.mantissa, addend.mantissa);
    return new Decimal(sum.toFixed(digits));
  }

  this.times = function(multiplicand){
    var product = this.value * multiplicand.value;
    return new Decimal(product);
  }
  // Option a
  this.toString = function(){
    return this.value.toString();
  }
}

// or, Option b
// Decimal.prototype.toString = function(){
//   return this.value;
// }
