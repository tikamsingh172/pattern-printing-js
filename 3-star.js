/*======================= Star Shape Pattern ==================================*/

/*---- Half Star Top ---*/
var r = 5;
var str = "";

for (let i = 1; i <= r; i++) {
  for (let j = r; j > i; j--) {
    str += " ";
  }
  for (let k = 1; k <= i; k++) {
    str += "* ";
  }
  str += "\n";
}
console.log(str);


/*----- Half Star Inverted ------*/
var r = 5;
var str = "";

for (let i = 1; i <= r; i++) {
  for (let j = 1; j <= i - 1; j++) {
    str += " ";
  }
  for (let k = r; k >= i; k--) {
    str += "* ";
  }
  str += "\n";
}
console.log(str);


/*-------- Half Star Left ---------*/
var r = 5;
var str = "";

for (let i = 1; i <= r * 2 - 1; i++) {
  if (i <= r) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
  } else {
    for (let j = r; j > i - r; j--) {
      str += "*";
    }
  }
  str += "\n";
}
console.log(str);


/*----- Half Star Right ------*/
var r = 5;
var str = "";

for (let i = 1; i <= r * 2 - 1; i++) {
  if (i <= r) {
    for (let j = r; j > i; j--) {
      str += " ";
    }
    for (let k = 1; k <= i; k++) {
      str += "*";
    }
  } else {
    for (let j = 1; j <= i - r; j++) {
      str += " ";
    }
    for (let k = r; k > i - r; k--) {
      str += "*";
    }
  }
  str += "\n";
}
console.log(str);


/*------ Full Star -----*/
var r = 5;
var str = "";

for (let i = 1; i <= r * 2 - 1; i++) {
  if (i <= r) {
    for (let j = r; j > i; j--) {
      str += " ";
    }
    for (let k = 1; k <= i; k++) {
      str += "* ";
    }
  } else {
    for (let j = 1; j <= i - r; j++) {
      str += " ";
    }
    for (let k = r; k > i - r; k--) {
      str += "* ";
    }
  }
  str += "\n";
}
console.log(str);
