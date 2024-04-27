/*=============== Pyramid Star Patterns===================*/

/*---------
1: Solid Upper pyramid
    *
   ***
  *****
 *******
*********
------------*/
var r = 5;
var str = "";

for (let i = 1; i <= r; i++) {
  for (let j = r; j > i; j--) {
    str += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);


/*---------
2: Hollow Upper pyramid
    *
   * *
  *   *
 *     *
*********
------------*/
var r = 5;
var str = "";

for (let i = 1; i <= r; i++) {
  for (let j = r; j > i; j--) {
    str += " ";
  }
  for (let k = 1; k <= i * 2 - 1; k++) {
    if (k == 1 || i == r || k == i * 2 - 1) {
      str += "*";
    } else {
      str += " ";
    }
  }
  str += "\n";
}
console.log(str);


/*----------
3: Solid Inverted Pyramid
*********
 *******
  *****
   ***
    *
----------*/
var r = 5;
var str = "";

for (let i = 1; i <= r; i++) {
  for (let j = 1; j <= i - 1; j++) {
    str += " ";
  }
  for (let k = r * 2 - 1; k >= 2 * i - 1; k--) {
    str += "*";
  }
  str += "\n";
}
console.log(str);


/*-----------
4: Hollow Inverted Pyramid
*********
 *     *
  *   *
   * *
    *
----------*/
var r = 5;
var str = "";

for (let i = 1; i <= r; i++) {
  for (let j = 1; j <= i - 1; j++) {
    str += " ";
  }
  for (let k = r * 2 - 1; k >= 2 * i - 1; k--) {
    if (i == 1 || k == r * 2 - 1 || k == 2 * i - 1) {
      str += "*";
    } else {
      str += " ";
    }
  }
  str += "\n";
}
console.log(str);
