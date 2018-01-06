/**
 * map Helper:
 * ===========
 *
 */


let numbers = [1, 2, 3, 6, 4, 5],
    doubledNumbers = [];


for (let i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}

let tripledNumbers = numbers.map((x) => {
    return x * x;
});


console.log(doubledNumbers);
console.log(tripledNumbers);


let cars = [{
        model: "BMW",
        price: 25
    },
    {
        model: "Audi",
        price: 67
    }
];

let prices = cars.map((x) => {
    return x.price;
});

console.log(prices);