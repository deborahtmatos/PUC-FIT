// Função para carregar os dados do usuário do Local Storage
function carregarDadosUsuario() {
    const usuarioAtualJSON = localStorage.getItem('usuarioLogado');
    if (usuarioAtualJSON) {
        const usuarioAtual = JSON.parse(usuarioAtualJSON);

        // Preenche os campos no HTML com os dados do usuário
        document.querySelector('.Informacao-Usuario .coluna-Informacao p:nth-of-type(1)').textContent = 'Nome: ' + usuarioAtual.nome;
        document.querySelector('.Informacao-Usuario .coluna-Informacao p:nth-of-type(2)').textContent = 'Email: ' + usuarioAtual.email;

        const matricula = Math.floor(10000 + Math.random() * 90000);
        document.querySelector('.Informacao-Usuario .coluna-Informacao2 p:nth-of-type(1)').textContent = 'Matrícula: ' + matricula;

        document.querySelector('.Informacao-Usuario .coluna-Informacao2 p:nth-of-type(2)').textContent = 'Telefone: ' + usuarioAtual.telefone;
    } else {
        console.log('Usuário não está logado.');
    }
}

// Função para realizar o login do usuário com email e senha
function realizarLogin(email, senha) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

    if (usuarioEncontrado) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
        carregarDadosUsuario();
        alert('Login realizado com sucesso!');
        window.location.href = '../../rotina-treino/RotinaDeTreino.html';
    } else {
        alert('Email ou senha incorretos.');
    }
}

// Evento para carregar os dados do usuário quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    carregarDadosUsuario();
});

// Evento para lidar com o fechamento do menu se clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.img-menu')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// Função para alternar a visibilidade do menu ao clicar no ícone de menu
function toggleMenu() {
    const menuDropdown = document.getElementById('menuDropdown');
    menuDropdown.classList.toggle('show');
}
