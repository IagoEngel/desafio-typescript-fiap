// iniciando a pagina
const buttonLivros = document.getElementById("btn-livros");
const buttonEditoras = document.getElementById("btn-editoras");
const divContent = document.getElementById('content');

window.onload = () => {
    buttonLivros.style.color = 'green';
    buttonEditoras.style.color = 'black';
    fetch('pages/livros.html')
        .then((res) => res.text())
        .then((pageHtml) => {
            divContent.innerHTML = pageHtml;
        });
}

function changeRoutesTo(routeName) {
    if (routeName === 'Livros') {
        buttonLivros.style.color = 'green';
        buttonEditoras.style.color = 'black';
        fetch('pages/livros.html')
            .then((res) => res.text())
            .then((pageHtml) => {
                divContent.innerHTML = pageHtml;
            });
    } else {
        buttonLivros.style.color = 'black';
        buttonEditoras.style.color = 'green';
        fetch('pages/editoras.html')
            .then((res) => res.text())
            .then((pageHtml) => {
                divContent.innerHTML = pageHtml;
            });
    }
}