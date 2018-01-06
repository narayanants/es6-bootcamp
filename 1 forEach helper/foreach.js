/**
 * Helpers we are going to cover:
 * ===============================
 * 
 *     forEach
 *     find
 *     reduce
 *     map 
 *     every
 *     filter
 *     some
 * 
 * Why do we use forEach?
 * -----------------------
 * 
 *  
 *  
 * 
 */

let colors = ['red', 'blue', 'green'];

for (let i; i < colors.length; i++) {
    console.log(colors[i]);
}

colors.forEach(function (color) {
    console.log(color);
});


/* Sum the array of numbers */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    sum = 0;

numbers.forEach((num) => {
    sum += num;
});

console.log(sum);