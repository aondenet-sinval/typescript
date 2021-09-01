/*
//Convert: 01
let meuCarro = new Object();
meuCarro['fabricacao'] = 'Ford';
meuCarro['modelo'] = 'Mustang';
meuCarro['ano'] = 1969;

console.log(meuCarro);

//é possível acessar as propriedades do objeto usando um valor de string
let PropriedadeA = 'fabricacao';
meuCarro[PropriedadeA] = "Wolks";//mudei ford para wolks
let PropriedadeB = "ano";
meuCarro[PropriedadeB] = 1971;

//usando for in para iterar
function mostrarProps(meuCarro) {
  let resultado: string = "";
  for (var i in meuCarro) {
    if (meuCarro.hasOwnProperty(i)) {
        resultado += meuCarro + "." + i + " = " + meuCarro[i] + "\n";
    }
  }
  return resultado;
}
console.log(mostrarProps(meuCarro));

var meuObj = new Object(),
    aleat = Math.random()
meuObj[aleat]             = "Numero Aleatorio";

console.log(meuObj);

var minhaHonda = {cor: "vermelho", rodas: 4, motor: {cilindros: 4, tamanho: 2.2}};
minhaHonda.cor = "Azul escuro";
console.log(minhaHonda);
*/
/*
//----------------------------------
//Convert: 02
//----------------------------------
function Carro(marca: string, modelo: string, ano: number, dono: string) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.dono = dono;
  this.mostreCarro = mostreCarro;

}
var carro1 = new Carro("Eagle", "Talon TSi", 1993, "jose");
var carro2 = new Carro("Nissan", "300ZX", 1992, "paulo");
console.log(carro1, carro2);
//carro1.preco = 1000;

//---------------------------------
Carro.prototype.preco = null;
Carro.prototype.potencia = null;
Carro.prototype.velocidadeMaxima = null;
Carro.prototype.ton = null;
carro1.preco = 100000;
carro2.potencia = 2000;
carro2.velocidadeMaxima = 400;
carro2.ton = 20;
console.log("Proto => ", carro1, carro2);

//Definição de metodo
function mostreCarro() {
  var resultado = "Um belo " + this.marca + " "  + this.ano + " " + this.fabricacao  + " " + this.modelo;
  console.log(resultado);
}
carro1.mostreCarro();
//
*/
//----------------------------------
//Convert: 03
//----------------------------------
// Encapsulamento das propriedades e métodos de Animal
var Animal = function () {
    tipo: "Invertebrados", // Propriedades de valores padrão
        preco;
    20, // Propriedades de valores padrão
        peso;
    1, // Propriedades de valores padrão
        qualTipo;
    function () {
        console.log(this.tipo);
    }
    qualPreco: function () {
        console.log(this.preco);
    }
    qualPeso: function () {
        console.log(this.peso);
    }
};
// Cria um novo tipo de animal chamado animal1
var animal1 = Object.create(Animal);
console.log("Tipo: " + animal1.tipo, "Preço: " + animal1.preco, "Peso: " + animal1.peso); // Saída:Invertebrados
// Cria um novo tipo de animal chamado Peixes
var peixe = Object.create(Animal);
peixe.tipo = "Sarda";
peixe.qualTipo(); // Saída: Peixes
peixe.preco = 40.00;
peixe.qualPreco(); // Saída: Peixes
peixe.peso = 2;
peixe.qualPeso(); // Saída: Peixes
/*
Um getter é um método que obtém o valor de uma propriedade específica. Um setter é um método que define o valor de uma propriedade específica. Você pode definir getters e setters em qualquer objeto de núcleo pré-definido ou objeto definido pelo usuário que suporta a adição de novas propriedades. A sintaxe para definir getters e setters usa a sintaxe literal do objeto.

O código a seguir ilustra como getters e setters podem funcionar para um objeto o definido pelo usuário.
*/
/*
var outra = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2
  }
};

console.log(outra.a); // 7
console.log(outra.b); // 8
//outra.c = 20;
outra.c = 20;
console.log(outra.a); // 25

Nota adicinal sobre get e set:
As propriedades do objeto o são:
o.a — um número
o.b — um getter que retorna o.a + 1
o.c — um setter que define o valor de o.a pela metade do valor definindo para o.c
*/
