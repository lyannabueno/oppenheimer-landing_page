document.addEventListener('DOMContentLoaded', () => {
    const textos = document.querySelectorAll('.changeSection');
    const secoes = document.querySelectorAll('.contentSection');
    const fundoInicial = document.getElementById('background_hero');

    textos.forEach(texto => {
        texto.addEventListener('click', (event) => {
            event.preventDefault();
            // Esconder todas as seções
            secoes.forEach(secao => {
                secao.style.display = 'none';
            });
    
            // Esconder a imagem de fundo inicial
            fundoInicial.style.display = 'none';
    
            // Mostrar a seção correspondente ao botão clicado
            const secaoAlvo = document.getElementById(texto.getAttribute('data-target'));
            secaoAlvo.style.display = 'block';
        });
    });
});