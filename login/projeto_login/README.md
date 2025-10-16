# Sistema de Login com Painel Mente Digital 🧠

Sistema web completo de autenticação de usuários desenvolvido em Python utilizando o framework Flask, com interface responsiva, banco de dados SQLite e painel de ferramentas integrado.

## 📋 Descrição do Projeto

Este projeto foi desenvolvido como trabalho acadêmico e consiste em uma aplicação web completa que integra:
- **Sistema de Autenticação**: Cadastro e login seguro de usuários
- **Painel Mente Digital**: Dashboard com acesso a ferramentas de análise de dados e formulários

A aplicação utiliza criptografia de senhas, sessões seguras, proteção de rotas e possui uma interface moderna e responsiva que se adapta a diferentes dispositivos.

## ✨ Funcionalidades

### Sistema de Autenticação
- ✅ **Cadastro de Usuários**: Registro de novos usuários com validação de dados
- ✅ **Login Seguro**: Autenticação com senhas criptografadas usando Werkzeug
- ✅ **Sessões Seguras**: Gerenciamento de sessões de usuário com Flask Sessions
- ✅ **Proteção de Rotas**: Acesso ao painel apenas para usuários autenticados
- ✅ **Logout**: Encerramento seguro de sessão
- ✅ **Validações**: Verificação de dados no frontend (JavaScript) e backend (Python)
- ✅ **Mensagens Flash**: Feedback visual para o usuário em cada ação

### Edição de Perfil
- ✅ **Editar username e e-mail** diretamente pela página de perfil
- ✅ **Alteração de senha** com verificação da senha atual
- ✅ **Indicador de força de senha** (Fraca/Média/Forte)
- ✅ **Validação em tempo real** de todos os campos
- ✅ **Requisitos de senha** com checkmarks dinâmicos
- ✅ **Saudação personalizada por horário** (Bom dia/Boa tarde/Boa noite)

**Acesso**: No painel, clique no seu nome no header (👤 Nome) → Editar dados ou senha → Salvar.

**Rota**: `/perfil` (protegida por autenticação)

### Painel Mente Digital
- ✅ **Formulário de Dados**: Acesso direto ao Google Forms para coleta de informações
- ✅ **Análise de Dados**: Ferramenta de extração e análise via Streamlit
- ✅ **Interface Responsiva**: Design adaptável para mobile, tablet e desktop
- ✅ **Header Fixo**: Informações do usuário e logout sempre visíveis
- ✅ **Cards Interativos**: Navegação intuitiva com efeitos visuais
- ✅ **Fundos Dinâmicos**: Imagens de fundo diferentes para cada tamanho de tela

## 🛠️ Tecnologias Utilizadas

### Backend
- **Python 3.x**: Linguagem de programação
- **Flask**: Framework web minimalista e poderoso
- **SQLite3**: Banco de dados relacional embutido
- **Werkzeug.security**: Biblioteca para criptografia de senhas (hash)

### Frontend
- **HTML5**: Estrutura semântica das páginas
- **CSS3**: Estilização moderna com gradientes, animações e responsividade
- **JavaScript (Vanilla)**: Interatividade, validações e controle de modais
- **Jinja2**: Sistema de templates do Flask

## 📁 Estrutura de Arquivos

```text
PROJETO_LOGIN/
│
├── venv/                         # Ambiente virtual Python
│
├── static/                       # Arquivos estáticos (CSS, JS, imagens)
│   ├── css/
│   │   ├── estilo.css            # Estilos da tela de login
│   │   ├── painel.css            # Estilos do painel principal
│   │   └── perfil.css            # Estilos da página de edição de perfil
│   ├── js/
│   │   ├── script.js             # JavaScript do modal de cadastro
│   │   └── perfil.js             # Lógica de validação e força de senha
│   └── imagens/                  # Imagens do painel
│       ├── forms-img.jpg
│       ├── extracao-de-dados-img.jpeg
│       ├── fundo-tela-pequena.jpeg
│       └── fundo-tela-grande.jpeg
│
├── templates/                    # Templates HTML (Jinja2)
│   ├── login.html                # Página de login e cadastro
│   ├── painel.html               # Painel principal (Mente Digital)
│   └── editar_perfil.html        # Página de edição de perfil
│
├── app.py                        # Aplicação Flask principal
├── criar_banco.py                # Script para criar banco de dados
├── usuarios.db                   # Banco de dados SQLite (gerado automaticamente)
└── README.md                     # Documentação do projeto
```

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Python 3.7 ou superior**: [Download Python](https://www.python.org/downloads/)
- **pip**: Gerenciador de pacotes Python (geralmente vem com Python)
- **Navegador web moderno**: Chrome, Firefox, Safari ou Edge

### Verificar instalação do Python

```
python --version
```

ou

```
python3 --version
```

### Verificar instalação do pip

```
pip --version
```

ou

```
pip3 --version
```

## 🚀 Instalação

### Passo 1: Clonar ou baixar o projeto

Faça o download do projeto ou clone o repositório:

Se estiver usando Git

```bash
git clone [URL_DO_REPOSITORIO]
cd projeto_login
```

Ou simplesmente extraia o arquivo ZIP do projeto em uma pasta.

### Passo 2: Criar estrutura de pastas

Certifique-se de que as pastas necessárias existem:

No Windows (PowerShell ou CMD)

```powershell
mkdir templates
mkdir static
mkdir static\css
mkdir static\js
mkdir static\imagens
```

No Linux/Mac

```bash
mkdir -p templates static/css static/js static/imagens
```

### Passo 3: Adicionar as imagens

Coloque as 4 imagens do painel na pasta `static/imagens/`:
- `forms-img.jpg`
- `extracao-de-dados-img.jpeg`
- `fundo-tela-pequena.jpeg`
- `fundo-tela-grande.jpeg`

### Passo 4: Ativar o ambiente virtual

O ambiente virtual já está criado na pasta `venv`. Ative-o:

**Windows:**

```powershell
venv\Scripts\activate
```

**Linux/Mac:**

```bash
source venv/bin/activate
```

Você verá `(venv)` no início da linha de comando quando estiver ativo.

### Passo 5: Instalar dependências

Se necessário, instale ou atualize o Flask:

```bash
pip install flask
```

Para verificar os pacotes instalados:

```bash
pip freeze
```

### Passo 6: Criar o banco de dados

Execute o script para criar a tabela de usuários:

```bash
python criar_banco.py
```

Você verá a mensagem: **"Banco de dados criado com sucesso!"**

### Passo 7: Executar a aplicação

Inicie o servidor Flask:

```bash
python app.py
```

A aplicação estará rodando em: `http://127.0.0.1:5000`

## 💻 Como Usar

### 1. Acessar a aplicação

Abra seu navegador e acesse:
`http://127.0.0.1:5000`

### 2. Criar uma conta

- Na tela de login, clique em **"Criar uma conta"**
- Preencha os dados:
  - **Nome de usuário**: deve ser único no sistema
  - **E-mail**: endereço de e-mail válido
  - **Senha**: mínimo 4 caracteres
  - **Confirmação de senha**: deve ser igual à senha
- Clique em **"Cadastrar"**
- Após cadastro bem-sucedido, faça login com suas credenciais

### 3. Fazer Login

- Digite seu **nome de usuário**
- Digite sua **senha**
- Clique em **"Entrar"**
- Você será redirecionado automaticamente para o Painel Mente Digital

### 4. Navegar pelo Painel

Após login bem-sucedido, você terá acesso ao painel principal com:
- **Header fixo**: Mostra seu nome e botão de logout
- **Card Formulário**: Link para Google Forms de coleta de dados
- **Card Análise**: Link para ferramenta de extração e análise de dados (Streamlit)

### 5. Fazer Logout

- No painel, clique no botão **"Sair"** no canto superior direito
- Você será deslogado e redirecionado para a tela de login

## 🎯 Funcionalidades do Painel Mente Digital

### Ferramentas Disponíveis

#### 1. Formulário de Dados
- Acesso direto ao Google Forms para coleta de informações
- Interface integrada com o sistema de autenticação
- Link externo protegido por login
- Abre em nova aba para não perder a sessão

#### 2. Análise de Dados
- Ferramenta de extração e análise de dados via Streamlit
- Dashboard interativo para visualização
- Acesso exclusivo para usuários autenticados
- Processamento de dados em tempo real

### Navegação e Interface

**Header Fixo**
- Sempre visível durante a navegação
- Mostra o nome do usuário logado
- Botão de logout de fácil acesso
- Design com gradiente roxo/azul

**Cards Interativos**
- Dois cards principais com acesso às ferramentas
- Efeitos hover com animações suaves
- Imagens ilustrativas de cada ferramenta
- Botões destacados com call-to-action claro

**Design Responsivo**
- **Mobile (até 480px)**: Layout em coluna, cards ocupam 95% da tela
- **Tablet (768px - 1023px)**: Dois cards lado a lado, otimização de espaço
- **Desktop (1024px+)**: Layout amplo, cards maiores com mais espaçamento
- **Fundos Dinâmicos**: Imagem de fundo muda automaticamente conforme o tamanho da tela

### Segurança do Painel

- Todas as rotas do painel são protegidas por autenticação
- Tentativas de acesso sem login redirecionam automaticamente para a tela de login
- Sessões seguras com controle de timeout
- Decorador `@login_required` protege endpoints sensíveis

## 🧪 Testes Recomendados

### Teste 1: Cadastro de usuário válido
1. Abra a página de login
2. Clique em "Criar uma conta"
3. Preencha todos os campos corretamente
4. Verifique se aparece mensagem de sucesso
5. Confirme que pode fazer login com as credenciais criadas

### Teste 2: Cadastro com senhas diferentes
1. Preencha o formulário de cadastro
2. Digite senhas diferentes nos campos de senha e confirmação
3. Verifique se aparece erro de validação (no modal e após submit)

### Teste 3: Usuário duplicado
1. Tente cadastrar um usuário que já existe
2. Verifique mensagem de erro apropriada
3. Confirme que o banco de dados não foi modificado

### Teste 4: Login com credenciais corretas
1. Use um usuário cadastrado
2. Digite senha correta
3. Verifique redirecionamento para o painel
4. Confirme que o nome aparece no header

### Teste 5: Login com credenciais incorretas
1. Digite usuário ou senha errados
2. Verifique mensagem de erro
3. Confirme que permanece na tela de login

### Teste 6: Proteção de rotas (acesso não autorizado)
1. Após logout, copie a URL do painel: `http://127.0.0.1:5000/painel`
2. Cole em nova aba sem fazer login
3. Verifique se é redirecionado automaticamente para login
4. Confirme mensagem de aviso

### Teste 7: Funcionalidade de logout
1. Faça login normalmente
2. Acesse o painel
3. Clique em "Sair" no header
4. Verifique mensagem de confirmação
5. Tente voltar ao painel - deve exigir novo login

### Teste 8: Responsividade
1. Acesse em diferentes dispositivos/resoluções
2. Verifique se o layout se adapta corretamente:
   - Mobile: Cards em coluna, header compacto
   - Tablet: Cards lado a lado
   - Desktop: Layout amplo com espaçamento
3. Teste redimensionamento da janela do navegador
4. Verifique mudança de imagem de fundo

### Teste 9: Links externos
1. Faça login e acesse o painel
2. Clique no link "Acessar Formulário"
3. Verifique se abre em nova aba
4. Volte à aba do painel - deve continuar logado
5. Repita com o link "Extrair Dados"

### Teste 10: Persistência de sessão
1. Faça login
2. Navegue pelo painel
3. Feche a aba (mas não o navegador)
4. Abra nova aba e acesse `http://127.0.0.1:5000`
5. Verifique se ainda está logado (redireciona para painel)

## 🔒 Segurança Implementada

### Criptografia de Senhas
- Uso de `werkzeug.security.generate_password_hash()` para hash de senhas
- Algoritmo PBKDF2 com salt aleatório
- Senhas nunca armazenadas em texto plano no banco de dados
- Verificação segura com `check_password_hash()`

### Proteção de Rotas
- Decorador `@login_required` em rotas sensíveis
- Verificação de sessão antes de acessar áreas restritas
- Redirecionamento automático para login em tentativas não autorizadas

### Validação de Dados
- Verificação no frontend (JavaScript) antes do envio
- Validação no backend (Python) antes de processar
- Sanitização de inputs para prevenir injeção de código

### Sessões Seguras
- Uso de `secret_key` forte para proteger sessões Flask
- Armazenamento de ID do usuário, nome e email na sessão
- Limpeza completa da sessão no logout

### Prevenção de SQL Injection
- Uso de consultas parametrizadas (`?` placeholders)
- Nunca concatenação direta de strings em queries SQL
- SQLite Row Factory para acesso seguro a colunas

### Boas Práticas Adicionais
- Constraint UNIQUE no campo username
- Validação de email no formulário
- Mensagens de erro genéricas (não revelam se usuário existe)
- HTTPS recomendado para produção

## 🎨 Características do Design

### Tela de Login
- **Interface moderna**: Gradientes roxo/azul (#667eea → #764ba2)
- **Animações suaves**: Fade-in, slide-down, shake
- **Modal responsivo**: Popup de cadastro adaptável
- **Feedback visual**: Mensagens de sucesso/erro destacadas
- **Inputs grandes**: Fácil digitação em dispositivos móveis

### Painel Mente Digital
- **Header fixo**: Gradiente consistente, sempre visível
- **Cards elevados**: Box-shadow profundo para sensação de profundidade
- **Hover effects**: Transformações e mudanças de cor
- **Imagens grandes**: Fotos ilustrativas de 250x200px
- **Botões destacados**: Call-to-action com gradientes
- **Footer discreto**: Informações de copyright

### Responsividade
- **Mobile First**: Design pensado primeiro para mobile
- **Breakpoints**: 480px (mobile), 768px (tablet), 1024px (desktop)
- **Flexbox**: Layout flexível e adaptável
- **Media Queries**: CSS específico para cada tamanho
- **Touch Friendly**: Botões e links grandes para toque

### Paleta de Cores
- **Primária**: #667eea (Azul-roxo)
- **Secundária**: #764ba2 (Roxo)
- **Hover**: #013b7e (Azul escuro)
- **Sucesso**: #28a745 (Verde)
- **Erro**: #e74c3c (Vermelho)
- **Texto**: #ffffff (Branco) / #333 (Cinza escuro)

## ⚠️ Problemas Comuns e Soluções

### Erro: "Flask não encontrado"
**Causa**: Flask não instalado ou ambiente virtual não ativado

**Solução**:
Windows

```powershell
venv\Scripts\activate
pip install flask
```

Linux/Mac

```bash
source venv/bin/activate
pip install flask
```

### Erro: "No module named 'werkzeug'"
**Causa**: Werkzeug não instalado (improvável, vem com Flask)

**Solução**:
```bash
pip install --upgrade flask
```

### Erro: "Unable to open database file"
**Causa**: Banco de dados não foi criado

**Solução**:
```bash
python criar_banco.py
```

### Erro: "Address already in use" (Porta 5000 ocupada)
**Causa**: Outra aplicação usando a porta 5000

**Solução**: Edite `app.py` e mude a porta:
```python
if __name__ == '__main__':
    app.run(debug=True, port=5001)  # Use outra porta
```

### Página não carrega CSS/JavaScript
**Causa**: Arquivos não estão na pasta `static/` ou caminhos incorretos

**Solução**:
1. Verifique se as pastas `static/css` e `static/js` existem
2. Confirme que os arquivos estão nos locais corretos
3. Limpe o cache do navegador (Ctrl+Shift+R)
4. Verifique os caminhos no HTML com `{{ url_for('static', filename='...') }}`

### Imagens do painel não aparecem
**Causa**: Imagens não estão na pasta `static/imagens/`

**Solução**:
1. Crie a pasta `static/imagens/`
2. Coloque as 4 imagens necessárias
3. Verifique os nomes dos arquivos (case-sensitive)

### Logout não funciona
**Causa**: Cache do navegador ou sessão corrompida

**Solução**:
1. Limpe cookies e cache do navegador
2. Feche todas as abas do navegador
3. Reabra e teste novamente

### Modal de cadastro não fecha
**Causa**: JavaScript não carregado

**Solução**:
1. Verifique console do navegador (F12)
2. Confirme que `script.js` está em `static/js/`
3. Verifique erros de sintaxe no JavaScript

## 📚 Recursos Adicionais

### Documentação Oficial
- [Flask Documentation](https://flask.palletsprojects.com/)
- [Python SQLite3](https://docs.python.org/3/library/sqlite3.html)
- [Werkzeug Security](https://werkzeug.palletsprojects.com/en/stable/utils/)
- [Jinja2 Templates](https://jinja.palletsprojects.com/)

## 👥 Equipe de Desenvolvimento

Este projeto foi desenvolvido por:
- **[Joao Paulo Rodrigues Machado]**
- **[Nome do Colega 2]** 
- **[Nome do Colega 3]** 
- **[Nome do Colega 4]** 

**Disciplina**: [Topicos de Big data]  
**Professor(a)**: [Nome do Professor]  
**Instituição**: [FACI - Wyden]  
**Semestre**: [2º Semestre de 2025]  

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como trabalho acadêmico.

**Uso Permitido**:
- Fins educacionais e de aprendizado
- Modificação e adaptação para outros projetos acadêmicos
- Uso como referência para estudos

## 📞 Suporte

Em caso de dúvidas ou problemas:

1. Consulte a seção **"Problemas Comuns e Soluções"** acima
2. Verifique a **documentação oficial** do Flask

---

**Desenvolvido usando Flask e Python**

*Última atualização: Outubro de 2025*

**Versão**: 2.0 (Integração Painel Principal)