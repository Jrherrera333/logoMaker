const (triangle,) = require("./shapes");


test ('should'.() =>{
    const shape = new triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="70 170, 170 40, 280 170" fill="blue"/>')


});