function cualculate(tmp) {
  var bool = true;
  var mem = tmp[1] - tmp[0];
  var mem2 = tmp[tmp.length - 1] - tmp[tmp.length - 2];
  for (var i = 0; i < tmp.length - 1; i++) {
    if (tmp[i + 1] - tmp[i] != mem && tmp[i + 1] - tmp[i] != mem2) {
      bool = false;
    }
  }
  return bool;
}

var array = [1, 1, 1, 1, 1, 1, 0];

alert(cualculate(array));
