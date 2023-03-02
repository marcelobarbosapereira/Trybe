
console.log('Parte 1');
//Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. 
//Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. 
//Escreva códigos para:
//Adição (a + b)
//Subtração (a - b)
//Multiplicação (a * b)
//Divisão (a / b)
//Módulo (a % b)
let a = 5;
let b = 10;
//Adição
console.log(a+b);
//subtracao
console.log(a-b);
//multiplicacao
console.log(a*b);
//divisao
console.log(a/b);
//modulo
console.log(a%b);

console.log('Parte 2');
//Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados. 
if(a > b){
    console.log("num 1 é maior que num 2");
} else {
    console.log("num 2 é maior que num 1");
}
console.log('Parte 3')
//Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados. 
let c=15
if (a > b && a > c){
    console.log('A é o maior numero');
} else if (b > a && b > c){
    console.log('B é o maior numero');
} else {
    console.log('C é o maior numero');
}
console.log('Parte 4')
//Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo. 
if (a > 0){
    console.log("positive");
} else if (a < 0){
    console.log("negative");
}else {
    console.log("zero");
}
console.log('Parte 5')
//Utilize if/else para escrever um código que defina três variaveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
//
//    Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
//
//    Um ângulo será considerado inválido se não tiver um valor positivo.
let a1 = 90;
let a2 = 45;
let a3 = 45;
if (a1 > 0 && a2 > 0 && a3 > 0){
    if(a1+a2+a3 === 180){
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("um dos angulos é invalido");
}

//Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.
//
//Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//
//Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).
//
//Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
//
//Exemplo: bishop (bispo) -> diagonals (diagonais)
