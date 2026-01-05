
const form = document.getElementById('form-tarefa');
const lista = document.getElementById('lista-ul');

form.addEventListener('submit', function(e) {
    

    e.preventDefault();


    const inputTarefa = document.getElementById('nome-tarefa');
    const valorDigitado = inputTarefa.value;


    const novoItem = document.createElement('li');


    novoItem.innerText = valorDigitado;


    novoItem.addEventListener('click', function() {

        novoItem.classList.toggle('concluida');
    });


    lista.appendChild(novoItem);


    inputTarefa.value = '';
});