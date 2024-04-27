/*============================ Square Patterns ============================*/
/*----------
1: Solid Square
*****
*****
*****
*****
*****
------------*/

var r = 5;
var str = "";

for (let i = 1; i <= r; i++) {
  for (let j = 1; j <= r; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);

/*-------- Using String.repeat() -------------*/
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(5));
}
/*-----------------------------------------------------------------------*/
/*----------
2: Hollow Square
*****
*   *
*   *
*   *
*****
*------------*/

var r = 5;
var str = "\n";

for (let i = 1; i <= r; i++) {
  for (let j = 1; j <= r; j++) {
    if (i == 1 || i == r || j == 1 || j == r) {
      str += "*";
    } else {
      str += " ";
    }
  }
  str += "\n";
}
console.log(str);
/*-----------------------------------------------------------------------*/


/*----------
3: Hollow Square With Diagonal
**********
**      **
* *    * *
*  *  *  *
*   **   *
*   **   *
*  *  *  *
* *    * *
**      **
**********
------------*/

var r = 10;
var str = "";

for (let i = 1; i <= r; i++) {
  for (let j = 1; j <= r; j++) {
    if (i == 1 || i == r || j == 1 || j == r || i == j || j == r - i + 1) {
      str += "*";
    } else {
      str += " ";
    }
  }
  str += "\n";
}
console.log(str);
/*-----------------------------------------------------------------------*/


/*------------
4: Rhombus Square
    *****
   *****
  *****
 *****
*****
------------*/

var r = 5;
var str = "";

for (let i = 1; i <= r; i++) {
  for (let j = r; j > i; j--) {
    str += " ";
  }
  for (let k = 1; k <= r; k++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);
