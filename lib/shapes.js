class shape{
    constructor(fill = "green"){
        this.fill = fill;
        this.color = color;
    }




}

class circle extends shape{

    constructor (fill, radius){

        super(fill)
        this.radius = radius
    }

    render(){


        return   ` <circle cx="150" cy="100" r="80" fill="${this.fill}" />`
    }




}

class triangle extends shape{


    render(){


        return  `<polygon points="70 170, 170 40, 280 170"${this.fill}"/>`
    }

    
}

class square extends shape{

    render(){


        `<rect x="80" y="30" width="140" height="140"${this.fill}" />`
    }



    
}