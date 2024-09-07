function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");


    let resultados = ""; // Inicializa uma string vazia para armazenar os resultados

    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
        // Constrói o HTML para cada resultado, formatando o título e a descrição
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                <h2>
                <p class="descricao-meta">${dado.descricao}.</p>
            </div>
        `;
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}
