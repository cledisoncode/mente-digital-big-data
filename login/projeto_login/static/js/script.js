// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona os elementos do DOM
    const modal = document.getElementById('cadastroModal');
    const btnAbrir = document.getElementById('openCadastro');
    const btnFechar = document.getElementById('closeCadastro');
    const formCadastro = document.getElementById('cadastroForm');
    const erroCadastro = document.getElementById('cadastroError');
    
    // Abre o modal de cadastro
    btnAbrir.onclick = function(e) {
        e.preventDefault(); // Previne o comportamento padrão do link
        modal.style.display = 'block';
    };
    
    // Fecha o modal ao clicar no X
    btnFechar.onclick = function() {
        modal.style.display = 'none';
        erroCadastro.style.display = 'none'; // Esconde mensagem de erro
    };
    
    // Fecha o modal ao clicar fora dele
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            erroCadastro.style.display = 'none';
        }
    };
    
    // Validação do formulário de cadastro antes de enviar
    formCadastro.onsubmit = function(e) {
        const senha = document.getElementById('newPassword').value;
        const confirmaSenha = document.getElementById('confirmPassword').value;
        
        // Verifica se as senhas coincidem
        if (senha !== confirmaSenha) {
            erroCadastro.textContent = 'As senhas não coincidem!';
            erroCadastro.style.display = 'block';
            e.preventDefault(); // Impede o envio do formulário
            return false;
        }
        
        // Verifica se a senha tem pelo menos 4 caracteres
        if (senha.length < 4) {
            erroCadastro.textContent = 'A senha deve ter pelo menos 4 caracteres!';
            erroCadastro.style.display = 'block';
            e.preventDefault();
            return false;
        }
        
        // Se tudo estiver OK, esconde a mensagem de erro
        erroCadastro.style.display = 'none';
        return true;
    };
});
