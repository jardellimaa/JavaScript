function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        return setTimeout(function () {
            if (idade >= 18) {
                return resolve(true);
            } else {
                return reject(false);
            }
        }, 2000);
    })
}

checaIdade(20)
    .then(function () {
        console.log("Maior que 18");
    })
    .catch(function () {
        console.log("Menor que 18");
    });

var buttonElement = document.querySelector('#a button');
var listElement = document.querySelector('#a ul');

buttonElement.onclick = function () {
    var user = document.querySelector('#a input').value;
    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            criarCarregando();
            console.log(response);
            criarLista(response.data);
        })
        .catch(function (error) {
            criarCarregando();
            console.warn(error);
            alert('Usuário não encontrado');
            listElement.innerHTML = '';
        })
}

function criarLista(list) {
    listElement.innerHTML = '';
    for (item of list) {
        var itemElement = document.createElement('li');
        itemElement.appendChild(document.createTextNode(item.name));
        listElement.appendChild(itemElement);
    }
}

function criarCarregando() {
    listElement.innerHTML = '';
    var itemElement = document.createElement('li');
    itemElement.appendChild(document.createTextNode('Carregando...'));
    listElement.appendChild(itemElement);
}