//set up user input
const fs = require("fs")
//set up readline library to interact with user via terminal
const readline = require('readline');
// importing class Circle, Triangle and  Square from shapes.js
const { Circle, Triangle, Square } = require('./lib/shapes');

//set up readline interface for terminal, to read inputs and to display output to the terminal
const rL = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//display the option's text for the user
console.log('Choose the shape of the logo:');
console.log('1. Circle');
console.log('2. Triangle');
console.log('3. Square');
//display input for the user
rL.question('Enter the number corresponding the shape: ', (choice) => {
    if (choice === '1') {
        createLogo(Circle);
    } else if (choice === '2') {
        createLogo(Triangle);
    } else if (choice === '3') {
        createLogo(Square);
    } else {
        console.log('Invalid choice.');
        rL.close();
    }
});
//ask the user for input to create a logo
function createLogo(ShapeClass) {
    rL.question('Enter 3 character text for logo: ', (text) => {
        rL.question('Enter the color of the logo name: ', (textColor) => {
            rL.question('Enter the color of the shape: ', (shapeColor) => {
                const shape = new ShapeClass(shapeColor, textColor, text);
                const svgContent = shape.render();

                //save svg content
                fs.writeFileSync('logo.svg', svgContent);

                console.log('Generated logo.svg file');
                rL.close();
            });
        });
    });
}

