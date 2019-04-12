var user = {
  name: "Вася",
  surname: "Петров"
};
alert(user.name);
alert(user.surname);
user.name = "Сергей";
alert(user.name);
delete user.name;
alert(user.name === undefined);
