// Original Class

class OrderReport{
    constructor(customer, total){
        this.customer = customer;
        this.total = total;
    }

    invoice(){
        console.log(`Invoice \n ${this.customer} \n ${this.total}`);
    }

    billOfLading(){
        console.log(`BOL \n ${this.customer} \n Shipping Label`);
    }
}

// Adding new feature to print the customer address
// Bad example
// 4 Changes have been made to the class, one of the changes 
// is adding a new argument to the contructor.

// This breaks the open/closed principle because it changes a class 
// in order to implement a new feature.
class OrderReport_NoOpenClosed{
    constructor(customer, total, address){
        this.customer = customer;
        this.total = total;
        this.address = address;
    }

    invoice(){
        console.log(`Invoice \n ${this.customer} \n ${this.total} \n ${this.address}`);
    }

    billOfLading(){
        console.log(`BOL \n ${this.customer} \n Shipping Label \n ${this.address}`);
    }
}

// New implementation using the Open/Closed Principle
// We abstract out an Invoice class that extends OrderReport
// We then abstract out BillOfLadding by extending OrderReport as well

class New_OrderReport {
    constructor(customer, total){
        this.customer = customer;
        this.total = total;
    }
}

class Invoice extends New_OrderReport{
    constructor(customer, total){
        super(customer, total);
    }

    printOut(){
        console.log(`Invoice \n ${this.customer} \n ${this.total}`);
    }
}

class BillOfLadding extends New_OrderReport{
    constructor(customer, total, address){
        super(customer, total);
        this.address = address;
    }

    printOut(){
        console.log(`BOL \n ${this.customer} \n ${this.total} \n ${this.address}`);
    }
}