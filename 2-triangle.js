/*================== Triangles Star Patterns ====================================*/

/*----------
1: Right Triangle
*
* *
* * *
* * * *
* * * * *
------------*/
var r = 5;
var str = "";

for (let i = 1; i <= r; i++) {
  for (let j = 1; j <= i; j++) {
    str += "* ";
  }
  str += "\n";
}
console.log(str);


/*----- Using String.repeat() ------*/
for(let i=1; i<=r; i++){
  console.log("* ".repeat(i));
}


/*----------
2: Inverted Right Triangle
* * * * *
* * * *
* * *
* *
*
------------*/
var r = 5;
var str = "\n";
for (let i = 1; i <= r; i++) {
  for (let j = r; j >= i; j--) {
    str += "* ";
  }
  str += "\n";
}
console.log(str);


/*----------
3: Mirror Right Triangle
    *
   **
  ***
 ****
*****
------------*/
var r = 5;
var str = "";

for (let i = 1; i <= r; i++) {
  for (let j = r; j > i; j--) {
    str += " ";
  }
  for (let k = 1; k <= i; k++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);


/*----------
4:Inverted Mirror Right Triangle
*****
 ****
  ***
   **
    *
------------*/
var r = 5;
var str = "";

for (let i = 1; i <= r; i++) {
  for (let j = 1; j <= i - 1; j++) {
    str += " ";
  }
  for (let k = r; k >= i; k--) {
    str += "*";
  }
  str += "\n";
}
console.log(str);


/*==================== Others Patterns in Triangle shape =====================*/

var r=5;
var str="";

for(let i=1;i<=r;i++){
  for(let j=1;j<=i;j++){
    // str+=("*");
    // str+=("A");
    // str+=(j);
    // str+=(i);
    // str+=(String.fromCharCode(j+64));
    str+=(String.fromCharCode(i+64));
  }
  str+=("\n");
}
console.log(str);