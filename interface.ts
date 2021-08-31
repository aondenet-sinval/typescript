/*
interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}

let employee: Employee = {
    firstName : "Emil",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}
//Implementando alias de tipo
type EmployeeAlias = {
    firstName: string;
    lastName: string;
    fullName(): string;
}
let employeeAlias: Employee = {
    firstName : "Emil",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

employeeAlias.lastName = "Gomes";
employee.firstName = "Sinval";  //* Error - Type 'number' is not assignable to type 'string'
//console.log(employee.firstName,employeeAlias.lastName);

//Criando a interface Nomes
interface Nomes {
   firstName: string;
   age: number;
}
//fazendo a implementação
let iceAge: Nomes = {
   firstName: 'vanilla',
   age: 2
}

console.log(iceAge.firstName);
//Usando a interface Nomes como tipo de parametro
function tooManyAge(dessert: Nomes) {
   if (dessert.age >= 50) {
      return dessert.firstName +" "+ dessert.age + ' is too many ages!';
   } else {
      return 'Your order will be ready soon!';
   }
}

console.log(tooManyAge({firstName: 'Sinval', age: 51}));
*/
//Estendendo interfaces a partir de outra:
interface IceCream {
   flavor: string;
   scoops: number;
   instructions?: string;
}
/*
function tooManyScoops(dessert: IceCream) {
   if (dessert.scoops >= 4) {
      return dessert.scoops + ' is too many scoops!';
   } else {
      return 'Your order will be ready soon!';
   }
}
console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));
*/

/*
function tooManyScoops(dessert: Sundae) {
    if (dessert.scoops >= 4) {
        return dessert.scoops +' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));
interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string;
}
let myIceCream: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
}
*/
//Criar tipos indexáveis
//Você pode usar interfaces que descrevem os tipos de matriz em que você pode indexar
interface IceCreamArray {
    [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0];
console.log(myStr);
//Implementar interfaces laboratório
interface Loan {
    principle: number,
    interestRate: number    //* Interest rate percentage (eg. 14 is 14%)
}

interface ConventionalLoan extends Loan {
    months: number      //* Total number of months
}
function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    // Calculates the monthly payment of an interest only loan
    let interest: number = loanTerms.interestRate / 1200;   // Calculates the Monthly Interest Rate of the loan
    let payment: number;
    payment = loanTerms.principle * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
let interestOnlyPayment = calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00"

function calculateConventionalLoanPayment(loanTerms: ConventionalLoan): string {
   // Calculates the monthly payment of a conventional loan
   let interest: number = loanTerms.interestRate / 1200;   // Calculates the Monthly Interest Rate of the loan
   let payment: number;
   payment = loanTerms.principle * interest / (1 - (Math.pow(1/(1 + interest), loanTerms.months)));
   return 'The conventional loan payment is ' + payment.toFixed(2);
}

let conventionalPayment = calculateConventionalLoanPayment({principle: 30000, interestRate: 5, months: 180});
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24"

