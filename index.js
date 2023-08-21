const fs = require("fs")
const readline = require('readline');
const { Circle, Triangle, Square } = require('./lib/shapes');

const rL = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('Choose the shape of the logo:');
console.log('1. Circle');
console.log('2. Triangle');
console.log('3. Square');

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

function createLogo(ShapeClass) {
    // console.log("CHOICE: "+ShapeClass);
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

