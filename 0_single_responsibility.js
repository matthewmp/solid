// ie. Cash Register
        
class CashRegister1 {
    constructor(){
        this.subTotal = 0;
        this.taxRate = 7.5;
        this.grandTotal = 0;
    }

    calculateTotal(){
        this.grandTotal = this.subTotal + (this.subTotal * this.taxRate);
        this.emailReceipt(`Thanks, your total was: ${this.grandTotal}`);
    }

    emailReceipt(message){
        console.log(`Sending Email: ${message}`);
    }
}

   // Email Class
export class Email {
    static sendMessage(message){
        console.log(`Sending Email: ${message}`);
    }
}

// CashRegister Class

// import { Email } from './email.class';  (import if necessary)
        
class CashRegister2 {
    constructor(){
        this.subTotal = 0;
        this.taxRate = 7.5;
        this.grandTotal = 0;
    }

    calculateTotal(){
        this.grandTotal = this.subTotal + (this.subTotal * this.taxRate);
        Email.sendMessage(`Thanks, your total was: ${this.grandTotal}`);
    }
}