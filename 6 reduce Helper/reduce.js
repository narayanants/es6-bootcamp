/**
 * every Helper:
 * =============
 */


let numbers = [10, 20, 30, 40, 50],
    sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

numbers.reduce((sum, number) => {
    return sum + number;
}, 0);


/* Complex Problem */

let primaryColors = [{
    color: 'red'
}, {
    color: 'yellow'
}, {
    color: 'blue'
}];


let reducedColor = primaryColors.reduce((previous, primaryColor) => {
    previous.push(primaryColor.color);
    return previous;
}, []);

console.log(reducedColor);