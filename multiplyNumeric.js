var obj = {
  num1: "2",
  num2: 3,
  num3: 4,
  str: "my string"
};

for (var key in obj) {
  if (!isNaN(obj[key]) && isFinite(obj[key])) {
    obj[key] *= 2;
  }
  alert(obj[key]);
}
