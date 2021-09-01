//Conversão de objeto para interface TS
interface Pessoa {
       nome: string;
       idade: number;
};


let pessoas: Pessoa = {
    nome : "Sinval",
    idade: 50,
}
console.log(pessoas.nome,pessoas.idade);//Retornando dados
console.log(pessoas["nome"],pessoas["idade"]);//Retornando dados
