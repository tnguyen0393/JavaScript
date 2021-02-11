function myClosure() {
  let x = 0;
  function myInner() {
    x++;
    return x;
  }
  return myInner;
}

let activate = myClosure();

console.log(activate());
console.log(activate());
console.log(activate());
console.log(activate());
