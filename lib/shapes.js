
const fs = require('fs');
const path = require('path');
// shapes super class to hold common values
class Shapes {
    constructor(color, textColor, text) {
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }
}
//created class Circle with inheritance from the Shapes super class
class Circle extends Shapes {
    constructor (color, textColor, text) {
        super(color, textColor, text);
    }
// the render method generate content for the SVG file circle based on the user's input
    render() {
        const svgTemplatePath = path.join(__dirname, 'examples', './circle.svg');  
        const svgTemplate = fs.readFileSync(svgTemplatePath, 'utf-8');
        const svgContent = svgTemplate
        .replace('{{COLOR}}', this.color)
        .replace('{{TEXT_COLOR}}', this.textColor)
        .replace('{{TEXT}}', this.text); 

        return svgContent;
    }
}
//created class Triangle with inheritance from the Shapes super class 
class Triangle extends Shapes{
    constructor (color, textColor, text) {
        super(color, textColor, text);
    }
// the render method generate content for the SVG file triangle based on the user's input
    render() {
        const svgTemplatePath = path.join(__dirname, 'examples', 'triangle.svg');  
        const svgTemplate = fs.readFileSync(svgTemplatePath, 'utf-8');
        const svgContent = svgTemplate
        .replace('{{COLOR}}', this.color)
        .replace('{{TEXT_COLOR}}', this.textColor)
        .replace('{{TEXT}}', this.text); 

        return svgContent;
    }
}
//created class Square with inheritance from the Shapes super class
class Square extends Shapes{
    constructor (color, textColor, text) {
        super(color, textColor, text);
    }
// the render method generate content for the SVG file square based on the user's input
    render() {
        const svgTemplatePath = path.join(__dirname, 'examples', 'square.svg');  
        const svgTemplate = fs.readFileSync(svgTemplatePath, 'utf-8');
        const svgContent = svgTemplate
        .replace('{{COLOR}}', this.color)
        .replace('{{TEXT_COLOR}}', this.textColor)
        .replace('{{TEXT}}', this.text); 

        return svgContent;
    }
}
// export class Circle, Triangle and Square
module.exports = { Circle, Triangle, Square};
