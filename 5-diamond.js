/*==================== Diamond Star Patterns==================================*/

/*------------
1: Solid Diamond
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
----------*/

/*---- Approach:1- using function --------*/
(() => {
  // upper part
  var r = 5;
  for (let i = 1; i <= r; i++) {
    let str = "";
    for (let j = r; j > i; j--) {
      str += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      str += "*";
    }
    console.log(str);
  }
  //lower part
  var r = 5 - 1;

  for (let i = 1; i <= r; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += " ";
    }
    for (let k = r * 2 - 1; k >= 2 * i - 1; k--) {
      str += "*";
    }
    console.log(str);
  }
})();
/*---------------------------------------------------------------------------------*/


/*-------- Approach:2- using for loop ---------*/
var r = 5;
var str = "";

for (let i = 1; i <= r * 2; i++) {
  if (i <= r) {
    for (let j = r; j > i; j--) {
      str += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      str += "*";
    }
    str += "\n";
  } else {
    for (let j = 1; j <= i - r; j++) {
      str += " ";
    }
    // for (let k = 1; k <= 2 * (2 * r - i) - 1; k++) {
    for (let k = r + 2; k >= 2 * (i - r) - 1; k--) {
      str += "*";
    }
    str += "\n";
  }
}
console.log(str);
/*---------------------------------------------------------------------------------*/


/*-------- Approach:3- using String.repeat() ---------*/
var r = 5;

for (let i = 1; i <= r; i++) {
  let str = "*";
  let space = " ";
  console.log(space.repeat(r - i) + str.repeat(i * 2 - 1));
}
for (let i = r - 1; i >= 1; i--) {
  let str = "*";
  let space = " ";
  console.log(space.repeat(r - i) + str.repeat(i * 2 - 1));
}
/*===========================================================================*/


/*---------
2: Hollow Diamond
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *
-----------*/

/*------- Approach:1- using function ---------*/
var r = 5;
(() => {
  // upper part
  var r = 5;
  for (let i = 1; i <= r; i++) {
    let str = "";
    for (let j = r; j > i; j--) {
      str += " ";
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      if (k == 1 || k == 2 * i - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
  //lower part
  var r = 5 - 1;

  for (let i = 1; i <= r; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += " ";
    }
    for (let k = r * 2 - 1; k >= 2 * i - 1; k--) {
      if (k == r * 2 - 1 || k == i * 2 - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
})();
/*------------------------------------------------------------------------------*/


/*-------- Approach:2- using for loop -------*/
var r = 5;
var str = "";

for (let i = 1; i <= r * 2; i++) {
  if (i <= r) {
    // upper part
    for (let j = r; j > i; j--) {
      str += " ";
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      if (k == 1 || k == i * 2 - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  } else {
    //lower part
    for (let j = 1; j <= i - r; j++) {
      str += " ";
    }
    // for (let k = 1; k <= 2 * (2 * r - i) - 1; k++) {
    for (let k = r + 2; k >= 2 * (i - r) - 1; k--) {
      if (k == r + 2 || k == 2 * (i - r) - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
}
console.log(str);
/*----------------------------------------------------------------------------*/


/*------------
*********
**** ****
***   ***
**     **
*       *
**     **
***   ***
**** ****
*********
---------------*/

var r = 5;
var str = "";

for (let i = 1; i <= r * 2 - 1; i++) {
  if (i <= r) {
    // upper part
    for (let j = r; j > i; j--) {
      str += "*";
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      if (k == 1 || k == i * 2 - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    for (let l = r - 1; l >= i; l--) {
      str += "*";
    }
    str += "\n";
  } else {
    //lower part
    for (let j = 1; j <= i - r; j++) {
      str += "*";
    }
    // for (let k = 1; k <= 2 * (2 * r - i) - 1; k++) {
    for (let k = r + 2; k >= 2 * (i - r) - 1; k--) {
      if (k == r + 2 || k == 2 * (i - r) - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    for (let l = 1; l <= i - r; l++) {
      str += "*";
    }
    str += "\n";
  }
}
console.log(str);

