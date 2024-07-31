document.addEventListener('DOMContentLoaded', function() {
    const btnAcessibilidade = document.getElementById('btn-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');

    btn_acessibilidade.addEventListener('click', function() {
        btn_acessibilidade.classList.toggle('rotated-button');
        opcoes_acessibilidade.classList.toggle('d-none');
        opcoes_acessibilidade.classList.toggle('show');
        
        // Atualização do valor do atributo aria-expanded
        const isExpanded = btn_acessibilidade.getAttribute('aria-expanded') === 'true';
        btn_acessibilidade.setAttribute('aria-expanded', !isExpanded);
    });

    const btnAumentaFonte = document.getElementById('aumenta-fonte');
    const btnResetaFonte = document.getElementById('reseta-fonte');
    const btnDiminiFonte = document.getElementById('diminui-fonte');
    const btnContraste = document.getElementById('btn-contraste');

    let currentFontSize = 1;

    btnAumentaFonte.addEventListener('click', function() {
        currentFontSize += 0.1;
        document.documentElement.style.fontSize += 2px;
    });

    btnResetaFonte.addEventListener('click', function() {
        currentFontSize = 1;
        document.body.style.fontSize = `${currentFontSize}rem`;
    });

    btnDiminiFonte.addEventListener('click', function() {
        currentFontSize -= 0.1;
        document.body.style.fontSize = `${currentFontSize}rem`;
    });

    btnContraste.addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
    });
});
