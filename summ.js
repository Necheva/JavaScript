function sum(a) {
  var tmp = a;

  function func(b) {
    tmp += b;
    return func;
  }
  func.toString = function() {
    return tmp;
  };

  return func;
}

alert(sum(6)(16)(52)(43)(24)(55));
