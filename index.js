const fs = require("fs")
let SVG = require ("./lib/svg")

let example = new SVG("SVG", "pink", "circle", "purple");

fs.writefile("shape.svg", example.markup, function(err){
    if(err)
    console.log(err)

})
//get inquirer running with this inquirer.front and pass the values from inquirer into here.
//then when you get the inquirer running with the with the colors then you can do the test
