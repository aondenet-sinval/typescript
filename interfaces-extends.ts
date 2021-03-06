//Criando a interface ou contrato:
interface Funcionarios {
    nome: string;
    salario: number;
    departamento?: string;
    cpf?: number;
    idade?: number;
}
//Implementando função que calcula o salário do mês com base em dias trabalhados
function CalcularSalario(diasTrabalhados: number, valorDia: number){
    return diasTrabalhados * valorDia;
}
//
interface Enderecos{ endereco?: string; }
//Implementando a interface ou prechendo o contrato:
let limpeza: Funcionarios = {
    departamento: 'Serviços Gerais',
    nome: 'Gabriel Marques',
    cpf: 558899,
    salario: 1900.00,
    idade: 33
}

//Implementando o contrato de duas interfaces:
let diretoria: Funcionarios | Enderecos = {
    departamento: 'Diretor Geral',
    nome: 'Fernanda Gabrieli',
    cpf: 32322143,
    salario: 6900.00,
    idade: 25,
    endereco: 'Rua Dois de Julho, 34, Centro, Itamarajú-BA'
}
//Comparativo de faixa salarial
function faixaSalarial(salarial: Funcionarios) {
   if (salarial.salario > 2000) {
      return salarial.nome + " " + salarial.salario + ' is Director!';
   } else {
      return salarial.salario + 'Is sub';
   }
}
console.log(diretoria);
console.log(faixaSalarial({nome: 'Gisele Monroe', salario: 6000}), "A receber: R$", CalcularSalario(22,300));
