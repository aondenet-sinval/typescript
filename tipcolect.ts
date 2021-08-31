//usando o tipo dos elementos seguidos por colchetes ([ ]) para indicar uma matriz desse tipo de elemento:
/*
let list: number[] = [1, 2, 3];
//console.log(list);
//usando um tipo Array genérico, usando a sintaxe Array<type>:
let list: Array<number> = [1, 2, 3];
//console.log(list);
//As duas formas acima apresentam os mesmos resultados
*/
//Usando matriz com tuplas:
let person1: [string, number] = ['Marcia', 35];
//Tente adicionar outro item à matriz. Por exemplo:
let person: [string, number] = ['Marcia', 35, true];
console.log(person1);
//Você receberá o seguinte erro:
//Source has 3 element(s) but target allows only 2.
//Se alterar aordem dos elementos receberá outro erro.
//let person1: [string, number] = [35, 'Marcia'];
//Você verá um erro que indica que a ordem dos valores deve corresponder à ordem dos tipos.
