// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos do formulário
    const form = document.getElementById('perfilForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const senhaAtualInput = document.getElementById('senha_atual');
    const novaSenhaInput = document.getElementById('nova_senha');
    const confirmaSenhaInput = document.getElementById('confirma_senha');
    
    // Elementos de validação
    const usernameValidation = document.getElementById('username-validation');
    const emailValidation = document.getElementById('email-validation');
    const senhaValidation = document.getElementById('senha-validation');
    
    // Elementos do indicador de força da senha
    const strengthContainer = document.getElementById('password-strength-container');
    const strengthFill = document.getElementById('password-strength-fill');
    const strengthText = document.getElementById('password-strength-text');
    const requirementsContainer = document.getElementById('password-requirements');
    
    // Requisitos da senha
    const reqLength = document.getElementById('req-length');
    const reqUppercase = document.getElementById('req-uppercase');
    const reqLowercase = document.getElementById('req-lowercase');
    const reqNumber = document.getElementById('req-number');
    const reqSpecial = document.getElementById('req-special');
    
    // Validação do username em tempo real
    usernameInput.addEventListener('input', function() {
        const value = this.value.trim();
        
        if (value.length === 0) {
            usernameValidation.textContent = '';
            usernameValidation.className = 'validation-message';
        } else if (value.length < 3) {
            usernameValidation.textContent = '⚠️ Mínimo 3 caracteres';
            usernameValidation.className = 'validation-message error';
        } else {
            usernameValidation.textContent = '✓ Username válido';
            usernameValidation.className = 'validation-message success';
        }
    });
    
    // Validação do email em tempo real
    emailInput.addEventListener('input', function() {
        const value = this.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (value.length === 0) {
            emailValidation.textContent = '';
            emailValidation.className = 'validation-message';
        } else if (!emailRegex.test(value)) {
            emailValidation.textContent = '⚠️ Email inválido';
            emailValidation.className = 'validation-message error';
        } else {
            emailValidation.textContent = '✓ Email válido';
            emailValidation.className = 'validation-message success';
        }
    });
    
    // Mostrar/ocultar indicador de força quando digitar nova senha
    novaSenhaInput.addEventListener('focus', function() {
        if (this.value.length > 0 || senhaAtualInput.value.length > 0) {
            strengthContainer.style.display = 'block';
            requirementsContainer.style.display = 'block';
        }
    });
    
    novaSenhaInput.addEventListener('blur', function() {
        if (this.value.length === 0) {
            strengthContainer.style.display = 'none';
            requirementsContainer.style.display = 'none';
        }
    });
    
    // Calcular força da senha em tempo real
    novaSenhaInput.addEventListener('input', function() {
        const senha = this.value;
        
        if (senha.length > 0) {
            strengthContainer.style.display = 'block';
            requirementsContainer.style.display = 'block';
            
            // Verificar requisitos
            const hasLength = senha.length >= 8;
            const hasUppercase = /[A-Z]/.test(senha);
            const hasLowercase = /[a-z]/.test(senha);
            const hasNumber = /[0-9]/.test(senha);
            const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
            
            // Atualizar visual dos requisitos
            updateRequirement(reqLength, hasLength);
            updateRequirement(reqUppercase, hasUppercase);
            updateRequirement(reqLowercase, hasLowercase);
            updateRequirement(reqNumber, hasNumber);
            updateRequirement(reqSpecial, hasSpecial);
            
            // Calcular força
            let strength = 0;
            if (hasLength) strength++;
            if (hasUppercase) strength++;
            if (hasLowercase) strength++;
            if (hasNumber) strength++;
            if (hasSpecial) strength++;
            
            // Atualizar indicador visual
            updateStrengthIndicator(strength);
        } else {
            strengthContainer.style.display = 'none';
            requirementsContainer.style.display = 'none';
        }
    });
    
    // Validar confirmação de senha em tempo real
    confirmaSenhaInput.addEventListener('input', function() {
        const novaSenha = novaSenhaInput.value;
        const confirmaSenha = this.value;
        
        if (confirmaSenha.length === 0) {
            senhaValidation.textContent = '';
            senhaValidation.className = 'validation-message';
        } else if (novaSenha !== confirmaSenha) {
            senhaValidation.textContent = '⚠️ As senhas não coincidem';
            senhaValidation.className = 'validation-message error';
        } else {
            senhaValidation.textContent = '✓ Senhas coincidem';
            senhaValidation.className = 'validation-message success';
        }
    });
    
    // Função para atualizar visual dos requisitos
    function updateRequirement(element, isValid) {
        if (isValid) {
            element.classList.add('valid');
        } else {
            element.classList.remove('valid');
        }
    }
    
    // Função para atualizar indicador de força
    function updateStrengthIndicator(strength) {
        // Remove classes antigas
        strengthFill.className = '';
        strengthText.className = '';
        
        if (strength <= 2) {
            strengthFill.classList.add('weak');
            strengthText.classList.add('weak');
            strengthText.textContent = 'Senha Fraca';
        } else if (strength <= 4) {
            strengthFill.classList.add('medium');
            strengthText.classList.add('medium');
            strengthText.textContent = 'Senha Média';
        } else {
            strengthFill.classList.add('strong');
            strengthText.classList.add('strong');
            strengthText.textContent = 'Senha Forte';
        }
    }
    
    // Validação final ao enviar formulário
    form.addEventListener('submit', function(e) {
        const novaSenha = novaSenhaInput.value;
        const confirmaSenha = confirmaSenhaInput.value;
        const senhaAtual = senhaAtualInput.value;
        
        // Se estiver tentando mudar a senha
        if (senhaAtual || novaSenha || confirmaSenha) {
            // Verifica se todos os campos de senha foram preenchidos
            if (!senhaAtual) {
                e.preventDefault();
                alert('Por favor, informe sua senha atual para alterá-la.');
                senhaAtualInput.focus();
                return false;
            }
            
            if (!novaSenha) {
                e.preventDefault();
                alert('Por favor, informe a nova senha.');
                novaSenhaInput.focus();
                return false;
            }
            
            if (!confirmaSenha) {
                e.preventDefault();
                alert('Por favor, confirme a nova senha.');
                confirmaSenhaInput.focus();
                return false;
            }
            
            // Verifica se as senhas coincidem
            if (novaSenha !== confirmaSenha) {
                e.preventDefault();
                alert('As senhas não coincidem!');
                confirmaSenhaInput.focus();
                return false;
            }
            
            // Verifica força mínima da senha
            if (novaSenha.length < 8) {
                e.preventDefault();
                alert('A senha deve ter no mínimo 8 caracteres!');
                novaSenhaInput.focus();
                return false;
            }
        }
        
        // Mostra loading
        const btnSalvar = form.querySelector('.btn-salvar');
        btnSalvar.textContent = '⏳ Salvando...';
        btnSalvar.disabled = true;
    });
});
