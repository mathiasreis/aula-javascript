let A = input(parseInt(line[0]));
let B = input(parseInt(line[1]));
let line = gets(A).split(" ");
let total = A + B;
console.log("X = " + total);


/*
function botao(){
    document.getElementById("agradecimento").innerHTML = "<i>Obrigado por clicar</i>";
}

function redirecionar(){
    //window.open("https://www.google.com/");
    window.location.href = "https://www.google.com/";
}

function trocar(elemento){
    elemento.innerHTML = "<b>Você é inteligente</b>";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
*/

/*
function trocar(){
    document.getElementById("mousemove").innerHTML = "<b>Você é inteligente</b>";
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}
*/

/*
function soma(n1, n2){
    return n1 + n2;
}

console.log(soma(5,12));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

console.log(setReplace("Vai Japão", "Japão", "Brasil"));

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = parseInt(prompt("Qual a sua idade?"));
console.log(validaIdade(idade));
*/

/*
var d = new Date();
alert(d.getMonth() + 1);
alert(d.getHours());


var count;
for(count = 0; count<=5; count++){
    console.log(count);
}
*/

/*
var count = 0;
while (count <= 10){
    console.log(count);
    count++;
}
*/

/*
var idade = parseInt(prompt("qual a sua idade?"));
if (idade > 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

/*
var listaFruta = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}, {nome:"banana", cor:"amarelo"}];
console.log(listaFruta);

var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
*/


/*
var lista = ["maça", "pera", "laranja"];
lista.push("uva"); //(4) ["maça", "pera", "laranja", "uva"]
lista.pop(); //(3) ["maça", "pera", "laranja"]

console.log(lista[0]); //maça
console.log(lista.toString()[0]), //m
console.log(lista.reverse()); //(3) ["laranja", "pera", "maça"]
console.log(lista.length); //3
console.log(lista.toString()); //laranja,pera,maça
console.log(lista.join(" | ")); //laranja | pera | maça
*/

/*
var nome = "Alexsander Reis da Silva";
var idade = 29;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos.");
console.log(idade + idade2);
console.log(idade * idade2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
*/