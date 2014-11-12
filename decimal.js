function Decimal(initialValue){
  this.value = initialValue;
  // Option a
  this.toString = function(){
    return this.value;
  }
}

// or, Option b
// Decimal.prototype.toString = function(){
//   return this.value;
// }
