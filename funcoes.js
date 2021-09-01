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
*/
//-- Parametros opcionais 
//acrescenta (?) no final do nome do segundo parametro
//ou acrescenta (?) no final do nome do parametro único
function addNumbersParam2(x, y) {
    return x + y;
}
console.log(addNumbersParam2(1, 2)); // Returns 3
//console.log(addNumbersParam2(1));    // Returns 1
function addNumbersParam3(y) {
    return y;
}
console.log(addNumbersParam3()); // Returns 3
