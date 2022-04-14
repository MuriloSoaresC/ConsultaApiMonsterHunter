//busca os dados da API
function consultaApi() {
    fetch('https://mhw-db.com/ailments')
    .then(response => response.json())
    .then(data => {
        const lista = document.querySelector('#lista-debuffs')

        //passa por todos os itens do array, cria os itens de lista, insere as informações e adiciona os itens dentro da lista
        data.map((debuff) => {
            const li = document.createElement('li');

            //popula a li
            li.setAttribute('id', debuff.id);
            li.innerHTML = debuff.name;
            li.innerHTML = debuff.description;
            lista.appendChild(li);
        });
    });
};