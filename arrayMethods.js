var obj = {
  className: "open menu"
};

calculate(obj, "open");
calculate(obj, "menu");
calculate(obj, "i");
calculate(obj, "hate");
calculate(obj, "everything");

function calculate(obj, str) {
  var tmp = obj.className.split(" ");
  for (var key = 0; key < tmp.length; key++) {
    if (tmp[key] === str) {
      return;
    }
  }
  tmp.push(str);
  obj.className = tmp.join(" ");
}

alert(obj.className);
