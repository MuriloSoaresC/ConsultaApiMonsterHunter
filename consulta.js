function consultaApi() {
    fetch('https://mhw-db.com/ailments')
    .then(response => response.json())
    .then(data => {
        const lista = document.querySelector('#lista-debuffs')

        data.map((debuff) => {
            const li = document.createElement('li');

            li.setAttribute('id', debuff.id);
            li.innerHTML = debuff.name;
            li.innerHTML = debuff.description;
            lista.appendChild(li);
        });
    });
};