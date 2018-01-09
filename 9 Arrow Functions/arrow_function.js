/**
 * Arrow Function:
 * ---------------
 * 
 *  Omit Paraenthesis when we have a single argument
 * 
 */


const add = (a, b) => a + b;

const double = (num) => 2 * num;

console.log(double(8));

/* Complex Example */

const numbers = [1, 2, 3, 4, 5];


numbers.map(num => 2 * num);



/* Another Example*/

const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function () {
        return this.members.map((name) => {
            return `${name} is on team ${this.teamName}`;
        });
    }
}

console.log(team.teamSummary());