const fs = require('fs');
const path = require('path');
const {Circle} = require('../lib/shapes'); // Import the Circle class

describe('Circle class', () => {
  it('should render SVG content with correct replacements', () => {
    const circle = new Circle('{{COLOR}}', '{{TEXT_COLOR}}', '{{TEXT}}');
    const expectedSVGContent = fs.readFileSync(
      path.join(__dirname, 'examples', 'circle.svg'),
      'utf-8'
    );

    const renderedSVGContent = circle.render();

    expect(renderedSVGContent).toEqual(expectedSVGContent);
  });
});


const {Triangle} = require('../lib/shapes'); // Import the Triangle class

describe('Triangle class', () => {
  it('should render SVG content with correct replacements', () => {
    const triangle = new Triangle('{{COLOR}}', '{{TEXT_COLOR}}', '{{TEXT}}');
    const expectedSVGContent = fs.readFileSync(
      path.join(__dirname, 'examples', 'triangle.svg'),
      'utf-8'
    );

    const renderedSVGContent = triangle.render();

    expect(renderedSVGContent).toEqual(expectedSVGContent);
  });
});


const {Square} = require('../lib/shapes'); // Import the Square class

describe('Square class', () => {
  it('should render SVG content with correct replacements', () => {
    const square = new Square('{{COLOR}}', '{{TEXT_COLOR}}', '{{TEXT}}');
    const expectedSVGContent = fs.readFileSync(
      path.join(__dirname, 'examples', 'square.svg'),
      'utf-8'
    );

    const renderedSVGContent = square.render();

    expect(renderedSVGContent).toEqual(expectedSVGContent);
  });
});

