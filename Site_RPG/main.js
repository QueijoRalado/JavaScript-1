const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
function carregarCampanhas() {
fetch("./campanhas.json")
    .then((res) => {
    return res.json();
    })
    .then((conteudo_json) => {
    // Aqui você pode percorrer os dados e adicionar os elementos
    for (let i = 0; i < conteudo_json.length; i++) {
        adicionarElementoCampanha(conteudo_json[i]);
    }
    })
    .catch((erro) => {
    console.error("Erro ao carregar as campanhas:", erro);
    });
}