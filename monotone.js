function cualculate(tmp) {
  var countUp = 0;
  var countDown = 0;
  for (var i = 0; i < tmp.length - 1; i++) {
    if (tmp[i + 1] > tmp[i] || tmp[i + 1] === tmp[i]) {
      countUp++;
    }
    if (tmp[i + 1] < tmp[i] || tmp[i + 1] === tmp[i]) {
      countDown++;
    }
    if (countUp === tmp.length - 1) {
      return true;
    }
    if (countDown === tmp.length - 1) {
      return true;
    }
  }
  return false;
}

var array = [1, 1, 5, 6, 9, 9, 9, 10, 20, 50]; //true
var arra2 = [1, 1, 1, 4, 7, 110, 124]; //true
var arra3 = [-12, 1, 1, 1, 1, 1, 10]; //ture
var arra4 = [1, 5, 3, 6, 8, 9, 9, 9, 0, 5]; //false
var arra5 = [0, -1, -5, -5, -5, -5, -7, -9]; //true

alert(cualculate(array));
alert(cualculate(arra2));
alert(cualculate(arra3));
alert(cualculate(arra4));
alert(cualculate(arra5));
