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

