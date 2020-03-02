class Usuario {

    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        super.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

//-------------------------------------------------

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(usuario => usuario.idade);
console.log(idades);

const rocketseat = usuarios
    .filter(usuario => usuario.empresa == 'Rocketseat')
    .filter(usuario => usuario.idade >= 18);
console.log(rocketseat);

const google = usuarios.find(usuario => usuario.empresa == 'Google');
console.log(google);

const unindo = usuarios
    .map(usuario => ({ nome: usuario.nome, idade: usuario.idade * 2, empresa: usuario.empresa }))
    .filter(usuario => usuario.idade <= 50);
console.log(unindo);

//-------------------------------------------------

const arr = [1, 2, 3, 4, 5];
console.log(arr.map(item => item + 10));

const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => usuario.idade;
console.log(mostraIdade(usuario));

const nomeD = "Diego";
const idadeD = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
console.log(mostraUsuario(nomeD, idadeD));
console.log(mostraUsuario(nomeD));

const promise = () => new Promise((resolve, reject) => resolve());
console.log(promise());

//-------------------------------------------------

const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};
const { nome: nomeE, endereco: { cidade, estado } } = empresa;
console.log(nomeE); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

//-------------------------------------------------

const arr2 = [1, 2, 3, 4, 5, 6]
const [x, ...y] = arr2;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

const soma = (...params) => params.reduce((total, next) => total + next);
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

const usuario2 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
const usuario3 = { ...usuario2, nome: 'Gabriel' };
const usuario4 = { ...usuario2, endereco: { ...usuario2.endereco, cidade: 'Lontras' } };
console.log(usuario3);
console.log(usuario4);

//-------------------------------------------------

const usuarioC = 'Diego';
const idadeC = 23;
console.log(`O usuário ${usuarioC} possui ${idadeC} anos`);

//-------------------------------------------------

const nome = 'Diego';
const idade = 23;
const usuarioD = {
    nome,
    idade,
    cidade: 'Rio do Sul',
};
console.log(usuarioD);