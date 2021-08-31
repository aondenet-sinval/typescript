#Criar funções no TypeScript
Concluído
100 XP
5 minutos
No JavaScript, as definições de função não especificam os tipos de dados para parâmetros, não executam a verificação de tipo nos argumentos transmitidos nem verificam a quantidade de argumentos recebidos; portanto, você deve adicionar a lógica para verificar esses parâmetros em suas funções.

O TypeScript simplifica o desenvolvimento de funções e as torna mais fáceis de solucionar, permitindo que você digite parâmetros e retorne valores. O TypeScript também adiciona novas opções para parâmetros. Por exemplo, embora todos os parâmetros sejam opcionais em funções JavaScript, você pode torná-los obrigatórios ou opcionais no TypeScript.

A adição de tipos a funções ajuda a impedir que você transmita valores que não deveria transmitir a suas funções. Isso é especialmente importante quando você está trabalhando com bases ou funções de código maiores desenvolvidas por outras pessoas. Por mais que a adição de tipos seja uma diferença simples, ela oferece a vantagem de verificar o tipo dos valores transmitidos para a função e o que é retornado. Em vez de ter que ficar adicionando toda a lógica à função para verificar se o tipo de valor correto foi transmitido a ela e se o valor de retorno está correto, o TypeScript ajuda a garantir os tipos de valor corretos conforme você desenvolve seu código. Além disso, ao criar a lógica de função, você terá suporte completo para preenchimento automático, pois o editor conhecerá o tipo de dados dos parâmetros – algo que o JavaScript normalmente não consegue detectar. Isso é especialmente útil quando você está usando funções desenvolvidas por terceiros porque o TypeScript esclarece os tipos de entrada e saída necessários.

Assim como no JavaScript, você pode definir funções no TypeScript de várias maneiras diferentes. Vejamos como essas funções se diferem com a adição de tipos no TypeScript.

Funções nomeadas
Uma função nomeada é uma declaração de função escrita com a palavra-chave function e com um nome distinto dentro do escopo atual. As declarações de função nomeadas são carregadas no contexto de execução antes da execução de qualquer código. Isso é conhecido como guindaste, ou seja, você pode usar a função antes de declará-la.

A sintaxe para declarar uma função nomeada no TypeScript é a mesma usada para definir uma no JavaScript. A única diferença para o TypeScript é que agora você pode fornecer uma anotação de tipo para os parâmetros e o valor retornado da função.

Essa função aceita dois parâmetros do tipo number e retorna um number.

TypeScript

Copiar
function addNumbers (x: number, y: number): number {
   return x + y;
}
addNumbers(1, 2);
Funções anônimas
Uma expressão de função (ou função anônima) é uma função que não é pré-carregada no contexto de execução e só é executada quando o código a encontra. As expressões de função são criadas em runtime e devem ser declaradas antes que possam ser chamadas. (Isso significa que elas não são elevadas, ao contrário de declarações de função nomeadas que são elevadas assim que a execução do programa é iniciada e podem ser chamadas antes da declaração.)

As expressões de função representam valores; portanto, são geralmente atribuídas a uma variável ou transmitidas para outras funções e podem ser anônimas, o que significa que a função não tem nome.

Este exemplo atribui uma expressão function à variável addNumbers. Observe que a função aparece no lugar do nome da função, tornando a função anônima. Você já pode usar essa variável para chamar a função.

TypeScript

Copiar
let addNumbers = function (x: number, y: number): number {
   return x + y;
}
addNumbers(1, 2);
Isso mostra a aparência da função nomeada sum do exemplo anterior quando gravada como função anônima. Observe que o nome add foi substituído pela função e que a função foi implementada como uma expressão em uma declaração de variável.

TypeScript

Copiar
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

console.log(total([1, 2, 3]));
Assim como antes, você obterá a verificação de tipo e o IntelliSense ao usar funções anônimas. Você também observará, nesse exemplo, que a variável total não é tipada, mas o TypeScript é capaz de determinar seu tipo através de algo chamado "tipificação contextual", uma forma de inferência de tipos. Isso pode reduzir a quantidade de esforço necessário para manter seu programa tipado.

Funções de seta
As funções de seta (também chamadas de funções Lambda ou de seta grossa, devido ao operador => usado para defini-las) fornecem uma sintaxe abreviada para definir uma função anônima. Devido à sua natureza concisa, as funções de seta geralmente são usadas com funções simples e em alguns cenários de manipulação de eventos.

Este exemplo compara a sintaxe de uma function anônima com uma função de seta de linha única. A função de seta abrevia a sintaxe omitindo a palavra-chave da função e adicionando o operador => entre os parâmetros e o corpo da função.

TypeScript

Copiar
// Anonymous function
let addNumbers1 = function (x: number, y: number): number {
   return x + y;
}

// Arrow function
let addNumbers2 = (x: number, y: number): number => x + y;
Nesse exemplo, observe ainda que as chaves foram removidas e que não há uma instrução return. As funções de seta de linha única podem usar uma  sintaxe de corpo concisa ou um  retorno implícito, que permite a omissão das chaves e da palavra-chave  return.

Se o corpo da função tiver mais do que uma linha única, use chaves em torno dela e inclua a instrução return (se for o caso). Este exemplo mostra a aparência da função anônima do exemplo anterior quando gravada como função de seta.

TypeScript

Copiar
let total2 = (input: number[]): number => {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}
Dica

As funções de seta foram introduzidas no ES2015, portanto, nem todos os navegadores dão suporte a elas. Com o uso do TypeScript, você pode aproveitar esses tipos de função e descompilar para versões anteriores do JavaScript, se necessário, para que seu código funcione com navegadores mais antigos.
----------------------------------------------
#
#Unidade seguinte: Exercício – Criar funções

Exercício – Criar funções
Concluído
100 XP
5 minutos
Neste exercício, você criará duas funções nomeadas com valores retornados e parâmetros fortemente tipados.

Abra o Playground e remova qualquer código existente.

Copie a função JavaScript a seguir para o Playground. Observe que o parâmetro message tem um tipo any implícito.

JavaScript

Copiar
function displayAlert(message) {
    alert('The message is ' + message);
}
Agora, atribua o tipo string ao parâmetro message. Essa função nomeada não retorna um valor, então você pode deixar de fora o tipo de retorno (você também pode devolver void como o tipo de retorno, mas não é necessário fazer isso).

TypeScript

Copiar
function displayAlert(message: string) {
    alert('The message is ' + message);
}
Tente chamar a função, transmitindo uma string como parâmetro. Agora, tente passar um number. O tipo TypeScript verifica o parâmetro e notifica você sobre o conflito. Dependendo do que você estiver tentando realizar com essa função, você pode colocar o número entre aspas, expandir os tipos de valores aceitos pelo parâmetro com um tipo de união (por exemplo msg: string | number) ou adicionar alguma lógica à sua função para manipular os diferentes tipos de valores transmitidos para ela.

Confira outro exemplo. A função sum totaliza os números em uma matriz e retorna o resultado. Copie o código de JavaScript para o Playground.

JavaScript

Copiar
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
Tente chamar a função com um único número como parâmetro, por exemplo, sum(5). Ela aceita o valor, mas não retorna o resultado correto porque o parâmetro não foi transmitido como matriz.

Agora, defina o tipo do parâmetro input como matriz de valores number, defina o tipo de retorno da função como number e o tipo da variável total.

TypeScript

Copiar
function sum(input: number[]): number {        
    let total: number =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){
            continue;
        }
        total += Number(input[count]);
    }
return total;
}
O TypeScript agora sinaliza o problema de tipo com o parâmetro. Tente chamar a função com uma matriz de valores, por exemplo, sum([1, 'two', 3]). Agora ela já deve retornar a resposta correta. Observe também que os valores dentro da matriz têm o tipo verificado.
---------------------------------------------
#Unidade seguinte: Trabalhar com parâmetros

Trabalhar com parâmetros
Concluído
100 XP
5 minutos
O compilador TypeScript pressupõe, por padrão, que todos os parâmetros definidos em uma função são obrigatórios. Quando uma função é chamada, o compilador TypeScript verifica se:

Cada parâmetro recebeu um valor.
Somente os parâmetros que a função requer são transmitidos para ela.
Os parâmetros são transmitidos na ordem em que estão definidos na função.
Isso difere no JavaScript, que pressupõe que todos os parâmetros são opcionais e permite que você transmita mais (ou menos) argumentos para a função do que são definidos por ela.

Além dos parâmetros obrigatórios, você pode definir funções com parâmetros opcionais, padrão e rest, bem como parâmetros de objeto desconstruídos.

Parâmetros obrigatórios
Todos os parâmetros de função são obrigatórios, salvo se especificado de outra forma, e a quantidade de argumentos transmitidos a uma função deve corresponder ao número de parâmetros obrigatórios que a função espera.

Neste exemplo, todos os parâmetros são obrigatórios.

TypeScript

Copiar
function addNumbers (x: number, y: number): number {
   return x + y;
}

addNumbers(1, 2); // Returns 3
addNumbers(1);    // Returns an error
Parâmetros opcionais
Também é possível definir parâmetros opcionais acrescentando um ponto de interrogação (?) ao final do nome do parâmetro.

Neste exemplo, x é obrigatório e y é opcional.

TypeScript

Copiar
function addNumbers (x: number, y?: number): number {
   return x + y;
}

addNumbers(1, 2); // Returns 3
addNumbers(1);    // Returns 1
Parâmetros padrão
Também é possível atribuir valores padrão a parâmetros opcionais. Se um valor for transmitido como argumento para o parâmetro opcional, esse valor será atribuído a ele. Caso contrário, o valor padrão será atribuído. Assim como ocorre com parâmetros opcionais, os parâmetros padrão devem vir após os obrigatórios na lista de parâmetros.

Neste exemplo, x é obrigatório e y é opcional. Se o valor não for transmitido para y, o valor padrão será 25.

TypeScript

Copiar
function addNumbers (x: number, y = 25): number {
   return x + y;
}

addNumbers(1, 2);  // Returns 3
addNumbers(1);     // Returns 26
Parâmetros rest
Se você quiser trabalhar com vários parâmetros como um grupo (em uma matriz) ou se não souber de quantos parâmetros uma função precisará, poderá usar parâmetros rest. Os parâmetros rest são tratados como um número ilimitado de parâmetros opcionais. Você pode deixá-los desativados ou usar o máximo que desejar.

Este exemplo tem um parâmetro obrigatório e um parâmetro opcional chamado restOfNumbers que pode aceitar qualquer quantidade adicional de números. As reticências (...) antes de restOfNumbers informam ao compilador para criar uma matriz dos argumentos transmitidos à função e atribui o nome que se segue a ela para que você possa usá-la em sua função.

TypeScript

Copiar
let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
   let total: number =  firstNumber;
   for(let counter = 0; counter < restOfNumbers.length; counter++) {
      if(isNaN(restOfNumbers[counter])){
         continue;
      }
      total += Number(restOfNumbers[counter]);
   }
   return total;
}
A função agora pode aceitar um ou mais valores e retornar o resultado.

TypeScript

Copiar
addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
addAllNumbers(2);                    // returns 2
addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5
Parâmetros de objeto desconstruídos
Os parâmetros de função são posicionais e devem ser transmitidos na ordem em que são definidos na função. Isso pode tornar seu código menos legível ao chamar uma função com vários parâmetros que são opcionais ou do mesmo tipo de dados.

Para habilitar parâmetros nomeados, você pode usar uma técnica chamada parâmetros de objeto desconstruído. Isso permite usar uma interface para definir parâmetros nomeados, em vez de posicionais, em suas funções.

O exemplo a seguir define uma interface denominada Message que define duas propriedades. Na função displayMessage, o objeto Message é transmitido como parâmetro, fornecendo acesso às propriedades como se fossem parâmetros normais.

TypeScript

Copiar
interface Message {
   text: string;
   sender: string;
}

function displayMessage({text, sender}: Message) {
    console.log(`Message from ${sender}: ${text}`);
}

displayMessage({sender: 'Christopher', text: 'hello, world'});
Unidade seguinte: Exercício – Trabalhar com parâmetros

Exercício – Trabalhar com parâmetros
Concluído
100 XP
5 minutos
Neste exercício, você criará funções que têm parâmetros obrigatórios, opcionais e padrão.

Parâmetros obrigatórios
Abra o Playground e remova qualquer código existente.

Insira a função de seta a seguir, que aceita três parâmetros obrigatórios.

TypeScript

Copiar
let addThreeNumbers = (x: number, y: number, z: number): number => x + y + z;
Tente chamar a função digitando addThreeNumbers(10, 20). O TypeScript gera o erro 3 argumentos esperados, mas 2 recebidos. Não foi fornecido um argumento para "z". Quando executada, a função retorna NaN porque o terceiro argumento foi transmitido como undefined, invalidando o cálculo.

O que acontece ao digitar addThreeNumbers(10, 20, 30, 40)? O TypeScript gera o erro 3 argumentos esperados, mas 4 recebidos. Quando executado, o quarto argumento é descartado e a função retorna 60.

Parâmetros opcionais
Na função, tente tornar o parâmetro y opcional. O que acontece?

TypeScript

Copiar
let addThreeNumbers = (x: number, y?: number, z: number): number => x + y + z;
O TypeScript gera um erro porque a posição dos parâmetros opcionais é importante. Na lista de parâmetros, os parâmetros opcionais devem seguir todos os parâmetros obrigatórios. Em vez do parâmetro y, tente tornar o parâmetro z opcional. Além disso, para que essa função retorne o valor correto, você também deve atualizá-la para lidar com a possibilidade de que z já tenha sido transmitido como undefined. Agora você deve conseguir chamar a função usando addThreeNumbers(10, 20) ou addThreeNumbers(10, 20, 30).

TypeScript

Copiar
let addThreeNumbers = (x: number, y: number, z?: number): number => {
    if((z === undefined)) {
        return x + y;
    } else {
        return x + y + z;
    }
};
Parâmetros padrão
Insira a função de seta a seguir, que aceita três parâmetros obrigatórios.

TypeScript

Copiar
let subtractThreeNumbers = (x: number, y: number, z: number): number => x - y - z;
Atribua um valor padrão de 100 ao parâmetro z substituindo z: number por z = 100.

TypeScript

Copiar
let subtractThreeNumbers = (x: number, y: number, z = 100): number => x - y - z;
Tente chamar a função com dois e três argumentos para testar o resultado.

TypeScript

Copiar
subtractThreeNumbers(10, 20);       // returns -110 because 'z' has been assigned the value 100
subtractThreeNumbers(10, 20, 15);   // returns -25
#Unidade seguinte: Exercício – Definir tipos de função
Exercício – Definir tipos de função
Concluído
100 XP
5 minutos
Você pode definir os tipos de função e usá-los em suas funções. Isso será útil se você quiser aplicar a mesma assinatura de tipo de função a mais de uma função.

Você pode definir um tipo de função usando um alias de tipo ou uma interface. As duas estratégias funcionam basicamente da mesma forma, portanto, cabe a você decidir qual é a melhor. Uma interface será melhor se você quiser ter a opção de estender o tipo de função. Um alias de tipo será melhor se você quiser usar uniões ou tuplas.

Suponhamos que você esteja criando uma função que executa uma operação Adicionar ou uma operação Subtrair, dependendo do valor de um parâmetro transmitido a ela. Ambas as operações aceitam dois números, x e y, e retornam o resultado como um número.

Abra o Playground e remova qualquer código existente.

Defina um tipo de função chamado calculator usando um alias de tipo. A assinatura de tipo tem uma lista de parâmetros (x: number, y: number) e retorna um number, separado por um operador de seta (=>). (Observe que a sintaxe da assinatura de tipo é a mesma que a da função de seta.)

TypeScript

Copiar
type calculator = (x: number, y: number) => number;
Agora você pode usar o tipo de função como assinatura de tipo ao declarar funções. Declare duas variáveis do tipo de função calculator, uma para a operação Adicionar e outra para a operação Subtrair. Teste as novas funções retornando o resultado de cada uma para o console.

TypeScript

Copiar
let addNumbers: calculator = (x: number, y: number): number => x + y;
let subtractNumbers: calculator = (x: number, y: number): number => x - y;

console.log(addNumbers(1, 2));
console.log(subtractNumbers(1, 2));
O tipo de função calculator também pode ser usado para transmitir valores oriundos de outra função. Insira a função doCalculation, que retorna o resultado da função addNumbers ou subtractNumbers com base no valor transmitido ao parâmetro operation.

TypeScript

Copiar
let doCalculation = (operation: 'add' | 'subtract'): calculator => {
    if (operation === 'add') {
        return addNumbers;
    } else {
        return subtractNumbers;
    }
}
Tente executar a função inserindo console.log(doCalculation('add')(1, 2)) e você observará que o TypeScript é capaz de fornecer ajuda do IntelliSense com base nos tipos definidos em doCalculation e calculator.

Agora, comente o tipo de função calculator e declare um novo usando uma interface. Observe que a assinatura de tipo é ligeiramente diferente, com dois-pontos (:) separando a lista de parâmetros e o tipo de retorno em vez do operador de seta. Substitua a função calculator pela interface Calculator nas declarações de variável. Quando você terminar, o código deverá funcionar da mesma forma.

TypeScript

Copiar
// type calculator = (x: number, y: number) => number;
interface Calculator {
    (x: number, y: number): number;
}
Inferência de tipos de função
Ao definir uma função, os nomes dos parâmetros de função não precisam corresponder àqueles no tipo de função. Embora que você precise nomear os parâmetros na assinatura de tipo em ambos os locais, os nomes são ignorados durante a verificação de compatibilidade de dois tipos de função.

Você também pode deixar de fora os tipos de parâmetro e tipos de retorno porque o TypeScript inferirá isso pelo tipo de função.

No que diz respeito ao TypeScript, essas três instruções são idênticas.

TypeScript

Copiar
let addNumbers: Calculator = (x: number, y: number): number => x + y;
let addNumbers: Calculator = (number1: number, number2: number): number => number1 + number2;
let addNumbers: Calculator = (num1, num2) => num1 + num2;
#Unidade seguinte: Laboratório – Usar funções no TypeScript

Laboratório – Usar funções no TypeScript
Concluído
100 XP
20 minutos
Neste laboratório, você converterá algumas funções JavaScript em TypeScript.

Exercício 1: converter uma função JavaScript em uma TypeScript com tipos de retorno e parâmetros fortemente tipados
O seguinte código JavaScript contém três funções:

BuildArray cria uma matriz de números aleatórios exclusivos. Ela aceita um parâmetro items que determina a quantidade de itens na matriz e um parâmetro sortOrder que determina se a matriz é classificada em ordem crescente ou decrescente.
sortDescending e sortAscending são funções de comparação que informam ao método sort() como classificar números em ordem crescente ou decrescente.
Converta as funções em TypeScript com tipos de retorno e parâmetros fortemente tipados.

Clone o repositório inicial inserindo o que vem a seguir no prompt de comando.

Bash

Copiar
git clone https://github.com/MicrosoftDocs/mslearn-typescript
cd mslearn-typescript/code/module-04/m04-start
code .
Abra o arquivo module04.ts.

Localize TODO: Update the BuildArray function.

Na função BuildArray, adicione tipos à lista de parâmetros, ao valor retornado e às variáveis.

TypeScript

Copiar
function buildArray(items: number, sortOrder: 'ascending' | 'descending'): number[] {
   let randomNumbers: number[] = [];
   let nextNumber: number;

   for (let counter = 0; counter < items; counter++) {
       nextNumber = Math.ceil(Math.random() * (100 - 1));
       if (randomNumbers.indexOf(nextNumber) === -1) {
         randomNumbers.push(nextNumber);
       } else {
         counter--;
       }
   }

   if (sortOrder === 'ascending') {
     return randomNumbers.sort(sortAscending);
   } else {
     return randomNumbers.sort(sortDescending);
   }
}
Localize TODO: Convert the sortDescending and sortAscending functions to anonymous functions.

Converta as funções sortDescending e sortAscending em funções anônimas e atribua-as a variáveis de mesmo nome.

TypeScript

Copiar
let sortDescending = (a, b) => {
   if (a > b) {
       return -1;;
   } else if (b > a) {
       return 1;;
   } else {
       return 0;
   }
}

let sortAscending = (a, b) => {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  }
Localize TODO: Declare a new function type for the sortDescending and sortAscending functions.

Declare um novo tipo de função para as funções sortDescending e sortAscending usando um alias de tipo ou uma interface.

TypeScript

Copiar
type compareFunctionType = (a: number, b:number) => number;
Nas declarações de variável para sortDescending e sortAscending, aplique o novo tipo de função como o tipo de variável.

TypeScript

Copiar
let sortDescending: compareFunctionType = (a, b) => {
   if (a > b) {
       return -1;;
   } else if (b > a) {
       return 1;;
   } else {
       return 0;
   }
}

let sortAscending: compareFunctionType = (a, b) => {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  }
Teste seu trabalho chamando a função buildArray.

TypeScript

Copiar
let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8, 'descending');
console.log(myArray1);
console.log(myArray2);
Exercício 2: converter uma função JavaScript em uma TypeScript usando parâmetros opcionais
Esta função JavaScript retorna o valor de pagamento de um empréstimo.

Localize TODO: Update the LoanCalculator function.

Converta a função loanCalculator em TypeScript com parâmetros fortemente tipados, variáveis e tipos de retorno.

Torne o parâmetro months opcional, mas atribua a ele um valor padrão de 12 meses, se omitido.

TypeScript

Copiar
function loanCalculator (principle: number, interestRate: number, months = 12): string {
    let interest: number = interestRate / 1200;   // Calculates the monthly interest rate 
    let payment: number;
    payment = principle * interest / (1 - (Math.pow(1/(1 + interest), months)));
    return payment.toFixed(2);
}
Teste seu trabalho chamando a função loanCalculator com apenas os parâmetros necessários.

TypeScript

Copiar
let myLoan = loanCalculator(1000, 5);
console.log(myLoan);
Desafie-se!
Para um desafio adicional, pegue um JavaScript existente que você tenha escrito ou que encontrou na Web e reescreva-o em TypeScript usando o que aprendeu sobre funções. Você pode copiar e colar o JavaScript no Playground e editá-lo ou usar outro editor como o Visual Studio Code.

Solução do laboratório
Exiba a versão final do código digitando o que vem a seguir no prompt de comando.

Bash

Copiar
cd ../m04-end
code .
Abra o arquivo module04.ts para ver a solução deste laboratório. Confira a seção Configuração do laboratório acima para obter mais informações sobre como configurar o ambiente de desenvolvimento para executar a solução.

#Unidade seguinte: Verificação de conhecimentos
Verificação de conhecimentos
200 XP
2 minutos
Escolha a melhor resposta para cada uma das perguntas abaixo. Em seguida, selecione Verificar suas respostas.

1. Qual é a diferença entre parâmetros de função no TypeScript e parâmetros de função no JavaScript?

Os parâmetros do TypeScript são obrigatórios por padrão, mas podem ser transformados em opcionais. Os parâmetros do JavaScript são sempre opcionais.

Os parâmetros do TypeScript são idênticos aos do JavaScript.

Os parâmetros do TypeScript são sempre opcionais. Os parâmetros do JavaScript são obrigatórios por padrão, mas podem ser transformados em opcionais.
2. Qual das opções é um uso comum para uma função anônima?

Quando é preciso aplicar a mesma assinatura de função a mais de uma função.

Quando é preciso ser capaz de reutilizar a função em todo o código.

Quando é preciso atribuir uma expressão de função a uma variável.
3. Como você deverá definir um tipo de função se precisar estendê-lo?

Você pode usar uma interface ou um alias de tipo. Os dois funcionam da mesma forma.

Definindo-o com uma interface.

Definindo-o com um alias de tipo.

