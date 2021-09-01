const makeIterator = (array) => {

let nextIndex = 0;

return {
 next : () => {
   return nextIndex < array.length ?
    {value: array[nextIndex ++], done: false} :
    {done: true};
   }
 }
};
const arr = ['yo', 'ya', 'yb', 'yc'];
let it = makeIterator(arr);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true