var array = ["jazz", "blues"];
array[array.length] = "rock-n-roll";
array[array.length - 2] = "classic";
alert(array);
array.shift(array[0]);
array.unshift("rap", "reggae");
alert(array);
