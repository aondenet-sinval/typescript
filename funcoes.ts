//-----------------------------------------------
//Função nomeada:
//-----------------------------------------------
/*
console.log(addNumbers(5, 2));//Não dá erro de declaração
function addNumbers (x: number, y: number): number {
   return x + y;
}
console.log(addNumbers(5, 2));

//-----------------------------------------------
//Função anônima:
//-----------------------------------------------
//console.log(addNumbersTwo(1, 2));//Erro de declaração se descomentar aqui
let addNumbersTwo = function (x: number, y: number): number {
   return x + y;
}
console.log(addNumbersTwo(1, 2));
//---
let total = function (input: number[]): number {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

console.log(total([1, 2, 3, 4, 7]));

let addNumbers1 = function (x: number, y: number): number {
   return x + y;
}
console.log(addNumbers1(30,4));
//-----------------------------------------------
//Arrow function:
//-----------------------------------------------
//Diferenças da anônima: 
//permite omissão de chaves e retorno implícito, se usada em uma linha
let addNumbers2 = (x: number, y: number): number => x + y;
console.log(addNumbers2(3,4));
//-----------------------------------------------
//Exemplo de função nomeada fortemente tipada:
//-----------------------------------------------
function displayAlert(message) {
    alert('The message is ' + message);
}
displayAlert(80);//Chamando função sem tipagem
//---
function displayAlert2(message: number) {
    alert('The message is ' + message);
}
//displayAlert2('alert');//Chamando função com tipagem retorna erro pois tipo é diferente
displayAlert2(800);//Chamando função com tipagem não retorna erro pois tipo é correto
//---
function displayAlert3(message: string | number) {
    alert('The message is ' + message);
}
displayAlert3('alert');//Chamando função com tipagem união não retorna erro
displayAlert3(800);//Chamando função com tipagem união não retorna erro
//---
//Função nomeada sem tipagem
function sum(input) {
    let total =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
alert(sum([5]));
//---

//---
//Função nomeada tipada com matriz de valores
function sum2(input: number[]): number {        
    let total: number =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){
            continue;
        }
        total += Number(input[count]);
    }
return total;
}
//console.log(sum2([1,2,3,'four']));
//Os valores dentro da matriz tem os tipos verificados
//Se descomentar o código acima recerá um erro de compiler do typescript
console.log(sum2([1,2,3]));//Compilação com êxito aqui

//-----------------------------------------------
//Trabalhando com parametros no TS
//-----------------------------------------------
//-- Parametros obrigatórios:
function addNumbersParam (x: number, y: number): number {
   return x + y;
}

console.log(addNumbersParam(1, 2)); // Returns 3
//console.log(addNumbersParam(2));// Retorna um erro pois faltou um parametro

//-- Parametros opcionais 
//acrescenta (?) no final do nome do segundo parametro
//ou acrescenta (?) no final do nome do parametro único
function addNumbersParam2 (x: number, y?: number): number {
   return x + y;
}

console.log(addNumbersParam2(1, 2)); // Returns 3
//console.log(addNumbersParam2(1));    // Returns 1

function addNumbersParam3 (y?: number): number {
   return y;
}

console.log(addNumbersParam3()); // Retorna undefined, pois é opcional
//NOTA: parametros opcionais são aceitáveis somente a partir do último
//Ou no primeiro em caso de parametro único.

//----
//Outros exemplos de uso de parametros:
let addThreeNumbersParam4 = (x: number, y: number, z: number): number => x + y + z;
//Ao descomentar um erro será retornado falta do parametro z:
//console.log(addThreeNumbersParam4(10, 20));
//Parametros corretos sendo passados: 3 parametros obrigatórios
console.log(addThreeNumbersParam4(3, 2,40));
//Parametros incorretos sendo passados: 3 parametros obrigatórios passados 4 dá erro
//console.log(addThreeNumbersParam4(3, 2,40,5));

//Variando o código para receber pelo menos um parametro:
//Tratando a função e preparando para receber um parametro:
let addThreeNumbersParam5 = (x: number, y?: number, z?: number): number => {
    if(y === undefined) {
        return x;
    }
    if(z === undefined) {
        return x + y;
    } else {
        return x + y + z;
    }
};
console.log(addThreeNumbersParam5(8));
//NOTA: se a função obtiver retorno NaN modifique a preferencia dos parametros no if

//Usando um/ou mais valor(es) de parametro padrão:
let subtractThreeNumbers = (x: number, y: number, z = 100): number => x - y - z;
console.log(subtractThreeNumbers(10, 20));//retorna -110 visto que z possue o valor 100
console.log(subtractThreeNumbers(10, 20, 15));   //retorna -25 pois o valor padrão foi substituído
let addThreeNumbers = (x: number, y: number, z = 100): number => x + y + z;
console.log(addThreeNumbers(10, 20));//retorna 130 visto que z possue o valor 100
console.log(addThreeNumbers(10, 20, 15));   // retorna 45 pois o valor padrão foi substituído.
let addThreeNumbers2 = (x: number, y = 0, z = 0): number => x + y + z;
console.log(addThreeNumbers2(10, 20));//retorna 30 visto que z possue o valor 0
console.log(addThreeNumbers2(10, 20, 15));   // retorna 45 pois o valor padrão foi substituído.
console.log(addThreeNumbers2(10));   // retorna 45 pois o valor padrão foi substituído.
//NOTA: observe que parametros padronizados se tornam parametros opcionais 
//e não interferem no valor retornado desde que possuam valor 0. Tá safo?
*/
//-----------------------------------------------
//Trabalhando com definição de tipos de função:
//-----------------------------------------------
//Usando alias de tipo:
/*
type calcular = (x: number, y: number) => number;//assinado o tipo calcular como number
let addNumbers: calcular = (x: number, y: number): number => x + y;
let subtractNumbers: calcular = (x: number, y: number): number => x - y;
//console.log(addNumbers(1, 2));
//console.log(subtractNumbers(1, 2));
let doCalc = (operation: 'add' | 'subtract'): calcular => {
    if (operation === 'add') {
        return addNumbers;
    } else {
        return subtractNumbers;
    }
}
console.log(doCalc('subtract')(1, 2));

//-----------------------------------------------
//Trabalhando com definição de tipos de função:
//-----------------------------------------------
//Usando interface:
interface CalcNumbers {
    (x: number, y: number): number;
}
let addNumbers: CalcNumbers = (x: number, y: number): number => x + y;
//A instrução addNumbers2 traz o mesmo resultado de addNumbers acima
let addNumbers2: CalcNumbers = (num1, num2) => num1 + num2;
let subtractNumbers: CalcNumbers = (x: number, y: number): number => x - y;
let doCalcInt = (operation: 'add' | 'subtract'): CalcNumbers => {
    if (operation === 'add') {
        return addNumbers;
    } else {
        return subtractNumbers;
    }
}
console.log(doCalcInt('add')(1, 2));
*/
