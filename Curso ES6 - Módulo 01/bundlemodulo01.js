"use strict";

var usuario = {
  nome: 'Jardel',
  idade: 23,
  endereco: {
    cidade: 'Duque de Caxias',
    estado: 'RJ'
  }
};
var nome = 'Igor';
var idade = 23;
var usuario2 = {
  nome: nome,
  idade: idade,
  profissao: 'Vendedor'
};
console.log(usuario2); // console.log('Meu nome é ' +usuario.nome +' e tenho ' +usuario.idade +' anos.');
//console.log(`Meu nome é ${usuario.nome} e tenho ${usuario.idade} anos.`);
// console.log(usuario);
// const { nome, idade , endereco: { cidade } } = usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);
// function mostra({ nome, idade}){
//     console.log(nome, idade);
// }
// mostra(usuario);
// const soma = (a = 3, b = 6) => a+b;
// console.log(soma(1));
// console.log(soma());
// const arr = [1, 3, 4, 5, 8, 9];
// const newArr = arr.map(item => item*2);
// console.log(newArr);
// const teste = () => ({ nome: 'Jardel'});
// console.log(teste());
// const newArr = arr.map(function(item, index) {
//     return item + index;
// });
// console.log(newArr);
// const sum = arr.reduce(function(total, next){
//     return total + next;
// });
// console.log(sum);
// const filter = arr.filter(function(item){
//     return item % 2 === 0;
// });
// console.log(filter);
// const find = arr.find(function(item){
//     return item === 2;
// })
// console.log(find);
// class List{
//     constructor(){
//         this.data = [];
//     }
//     add(data){
//         this.data.push(data);
//         console.log(this.data);
//     }
// }
// class TodoList extends List{
//     constructor(){
//         super();
//         this.usuario = 'Jardel';
//     }
//     mostraUsuario(){
//         console.log(this.usuario);
//     }
// }
// const MinhaLista = new TodoList();
// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.add("Novo todo");
// }
// MinhaLista.mostraUsuario();
// function teste(x) {
//     let y = 2;
//     if (x>5){
//         console.log(x, y);
//     }
// }
// teste(10);
