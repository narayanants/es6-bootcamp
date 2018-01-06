/**
 * every Helper:
 * ==============
 * 
 */


let computers = [{
        name: 'Dell',
        RAM: 26
    },
    {
        name: 'Apple',
        RAM: 22
    },
    {
        name: 'Acer',
        RAM: 12
    }
];

/*  Using Filter*/
let singleComputer = computers.filter((x) => {
    return x.RAM > 22;
});

//console.log(singleComputer);


let allComputersThatCanRunProgram = true,
    onlySomeComputersCanRunProgram = false;

for (let i = 0; i < computers.length; i++) {
    let computer = computers[i];
    if (computer.RAM < 22) {
        allComputersThatCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
}

//console.log(allComputersThatCanRunProgram);
//console.log(onlySomeComputersCanRunProgram);


/* Using Every */

let everyRAM = computers.every((x) => {
    return x.RAM > 16;
});

let someRAM = computers.some((x) => {
    return x.RAM > 16;
});


//console.log(everyRAM); // AND Condition
//console.log(someRAM); // OR Operator


/* Complex Problem */

let names = [
    'Alex',
    'Andrea',
    'Bill'
];


let everyName = names.every((x) => {
    return x.length > 4;
});

let someName = names.some((x) => {
    return x.length > 4;
});

//console.log(everyName);
//console.log(someName);


/* Complex Example */

function Field(value) {
    this.value = value;
}

Field.prototype.validate = function () {
    return this.value.length > 0;
}

let userName = new Field('Narayanan'),
    password = new Field('@we$ome');

console.log(userName.validate());
console.log(password.validate());

let fields = [userName, password];

let formIsValid = fields.every((x) => {
    return x.validate();
});

if (formIsValid) {
    // show the output
} else {
    //Show the error message
}