/**
 * 2.5 值和引用
 */
function foo(x) {
  x.push(4);
  console.log(x);

  x = [4,5,6];
  x.push(7);
  console.log(x);
}

var a = [1,2,3];
foo(a);
console.log(a);