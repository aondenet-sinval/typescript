/*

//Declarando explcitamente o tipo
let x: number;
//Declarando implicitamente o tipo
let y = 10;
//Declarando de variável sem tipificar inicializar
let z;
console.log("A variavel x é do tipo: ",typeof(x));
console.log("A variavel y é do tipo: ",typeof(y));
z = "one";
console.log("A variavel z é do tipo: ",typeof(z));
*/
/*
//Uso de enuns:
enum ContractStatus{
  Permanent = 2,
  Temp,
  Apprentice
}
let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
if(employeeStatus === 3){
  console.log("Ok, perfeito");
}else{
  console.log("Erro");
}
*/
//Tipos any e unknown
/*
//any
let randomValue: any = 10;
console.log(typeof(randomValue),'\n');//number acept
randomValue = true;      // OK
console.log(typeof(randomValue),'\n');//boolean acept
randomValue = 'Mateo';   // OK
console.log(typeof(randomValue));//string acept
console.log("Propriedade => ",randomValue.name);  // Logs "undefined" to the console
//randomValue();                  // Returns "randomValue is not a function" error
//randomValue.toUpperCase();      // Returns "randomValue is not a function" error
*/
/*
//unknown
let randomValue: unknown = 10;
console.log(typeof(randomValue));
randomValue = true;
console.log(typeof(randomValue));
randomValue = 'Mateo';
console.log(typeof(randomValue));
let assert = (randomValue as string).toUpperCase();
console.log('Asserção de tipos: ',assert);
*/
/*
//Usando protetores de tipo typeof
let randomValue: unknown = 10;
randomValue = true;
randomValue = 'Mateo';

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}
*/
/*
//Tipo de união (|)usados com protetores de tipos:
function add(x: number | string, y: number | string) {
  if (typeof x === 'number' && typeof y === 'number') {
      return x + y;
  }
  if (typeof x === 'string' && typeof y === 'string') {
      return x.concat(y);
  }
  throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
*/
/*
//Tipo de intersecão usados com interface:
interface Employee {
  employeeID: number;
  age: number;
}
interface Manager {
  stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
console.log(newManager);
*/
/*
//Definindo tipos literais
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
//myResult = "failure";       //* Invalid
console.log(myResult);
*/
//Tipos literais numéricos:
type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
//diceRoll = 7;    //* Invalid