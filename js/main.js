function clique(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log();
}

function redirecionar(){
    //window.open ("https://digitalinnovation.one/");
    window.location.href="https://digitalinnovation.one/";
}

function trocar(elemento){
    //alert("trocar texto");
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
   //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
   elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada!");
}

function functionChange(elemento){
    console.log(elemento.value);
}


/* Introdução

var nome = "Amanda Shichinoe";
var idade = "25";
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
*/

/* Array
var lista = ["maçã" , "pêra", "laranja"];
console.log(lista[1]);
lista.push("uva");
console.log(lista);
//lista.pop();
console.log(lista.length);
console.log(lista.reverse());
console.log(lista);
console.log(lista.toString());
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join( " - "));
*/

/*dicionário
var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
*/

/* Lista de dicionários
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
console.log(frutas[1].nome);
console.log(frutas[1].cor);
*/

/*Condicionais
//var idade = 18;
var idade = prompt("Qual a sua idade?");
if(idade>=18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
}
*/

/*Laços de repetição
var count = 0;
for(count = 0; count <=5; count ++){
    alert(count);
}

while(count <= 5){
    console.log(count);
    count = count ++;
}*/

/*Date
var d = new Date();
alert(d.getMonth()+1);
alert(d.getSeconds());
*/

/* funções
function soma (n1, n2) {
    return n1 + n2;
}
//alert(soma(5,10));

var validar = 0;
function validaIdade(idade){
    if(idade >= 18){
        validar = true
    }
    else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
//console.log(validaIdade(idade));
validaIdade(idade);
console.log(validar);
*/