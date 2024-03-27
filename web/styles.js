const apiUrl = "http://localhost:4000/api";

document.getElementById('get-livros').addEventListener('click', async (event) => {
    const anchor = document.getElementById('api-content');

    const response = await fetch(`${apiUrl}/livros`);
    const json = await response.json();
    
    for (let i = 0; i < json.length; i++) {
        let livroHTML = document.createElement('tr');
        livroHTML.innerHTML = `<td>${json[i].id_livro}</td>`;
        livroHTML.innerHTML += `<td>${json[i].titulo}</td>`;
        livroHTML.innerHTML += `<td>${json[i].autor}</td>`;
        livroHTML.innerHTML += `<td>${json[i].isbn}</td>`;
        livroHTML.innerHTML += `<td>${json[i].ano_publicacao}</td>`;
        livroHTML.innerHTML += `<td>${json[i].nome}</td>`;

        anchor.appendChild(livroHTML);
    }
});