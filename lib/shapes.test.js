const fs = require('fs');
const path = require('path');
const Circle = require('./Circle'); // Import the Circle class

describe('Circle class', () => {
  it('should render SVG content with correct replacements', () => {
    const circle = new Circle('red', 'white', 'JRH');
    const expectedSVGContent = fs.readFileSync(
      path.join(__dirname, 'examples', 'expected-circle.svg'),
      'utf-8'
    );

    const renderedSVGContent = Circle.render();

    expect(renderedSVGContent).toEqual(expectedSVGContent);
  });
});







// test ('should set color to blue'.() =>{
//     const shape = new triangle();
//     shape.setColor("blue");
//     expect(shape.render()).toEqual('<polygon points="70 170, 170 40, 280 170" fill="blue"/>');


// });

// const {square,} = require("./shapes");


// test ('should set color to red'.() =>{
//     const shape = new square();
//     shape.setColor("red");
//     expect(shape.render()).toEqual('<rect x="80" y="30" width="140" height="140" fill="red" />');


// });

