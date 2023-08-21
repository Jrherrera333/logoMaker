const fs = require('fs');
const path = require('path');

class Shapes {
    constructor(color, textColor, text) {
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }
}

class Circle extends Shapes {
    constructor (color, textColor, text) {
        super(color, textColor, text);
    }

    render() {
        const svgTemplatePath = path.join(__dirname, 'examples', 'circle.svg');  
        const svgTemplate = fs.readFileSync(svgTemplatePath, 'utf-8');
        const svgContent = svgTemplate
        .replace('{{COLOR}}', this.color)
        .replace('{{TEXT_COLOR}}', this.textColor)
        .replace('{{TEXT}}', this.text); 

        return svgContent;
    }
}

class Triangle extends Shapes{
    constructor (color, textColor, text) {
        super(color, textColor, text);
    }

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

class Square extends Shapes{
    constructor (color, textColor, text) {
        super(color, textColor, text);
    }

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
module.exports = { Circle, Triangle, Square};
// let circle = new circle(green, green, circle, 60)
// let triangle = new triangle(blue, blue, triangle)
// let square = new square(red, red, square)
