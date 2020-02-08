 // A Rectangle Class has a method to set it's width and another to set it's height. 
// It also has methods to increase it's width and return it's area

class Rectangle_NonLiskov {
    setWidth(width){
        this.width = width;
    }

    setHeight(height){
        this.height = height;
    }

    increaseWidth(){
        this.setWidth(this.width + 1);
        this.area();
    }

    area(){
        console.log('Area: ', this.width * this.height);
    }
}

// Now we extend the Rectangle class with a Square class.
// The only difference is that we set the width and height to be the same.

class Square_NonLiskov extends Rectangle_NonLiskov {
    setWidth(width){
        this.width = width;
        this.height = width;
    }

    setHeight(height){
        this.width = height;
        this.height = height;
    }
}

// Instantiate a new square and set it's width to 5.
var square1 = new Square_NonLiskov();
square1.setWidth(5); // width: 5, height: 5

square1.area() //25

square1.increaseWidth() // height: 6, width: 6, area: 36

/*
    Because the Square increases both width and height together,
    a rectangle can not replace a square and breaks Liskov's principle of
    substitution.

    In order to fix this we can change where the square inherits from.
*/

// Create Shape Class as Parent to Rectangle and Square
class Shape {
    area(){
        console.log('Area: ', this.width * this.height);
    }
}

class Rectangle extends Shape{
    setWidth(width){
        this.width = width;
    }

    setHeight(height){
        this.height = height;
    }

    increaseWidth(){
        this.setWidth(this.width + 1);
        this.area();
    }
} 

class Square extends Shape {
    setWidth(width){
        this.width = width;
        this.height = width;
    }

    setHeight(height){
        this.width = height;
        this.height = height;
    }
}

/*
    Now both Reactangle and Square inherit from Shape so they both will have 
    the area() method baked in and can explicitly handle their individual
    needs in terms of setting width/height within their own classes.
*/

const square = new Square();
square.setHeight(10);
square.area()

square instanceof Square;
square instanceof Shape;
