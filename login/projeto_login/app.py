# Importações necessárias
from flask import Flask, render_template, request, redirect, url_for, flash, session
import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash
from functools import wraps

# Inicializa a aplicação Flask
app = Flask(__name__)
app.secret_key = 'chave_secreta_super_segura_123'

# Função para conectar ao banco de dados
def get_db():
    """Cria e retorna uma conexão com o banco de dados SQLite"""
    conn = sqlite3.connect('usuarios.db')
    conn.row_factory = sqlite3.Row
    return conn

# Decorador para proteger rotas que exigem login
def login_required(f):
    """Decorador que verifica se o usuário está autenticado"""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'usuario_id' not in session:
            flash('Você precisa fazer login primeiro!', 'error')
            return redirect(url_for('index'))
        return f(*args, **kwargs)
    return decorated_function

# Rota principal - exibe a página de login
@app.route('/')
def index():
    """Renderiza a página inicial de login"""
    if 'usuario_id' in session:
        return redirect(url_for('painel'))
    return render_template('login.html')

# Rota de cadastro
@app.route('/cadastro', methods=['POST'])
def cadastro():
    """Processa o cadastro de um novo usuário"""
    username = request.form['newUsername']
    email = request.form['newEmail']
    senha = request.form['newPassword']
    confirma_senha = request.form['confirmPassword']
    
    if senha != confirma_senha:
        flash('As senhas não coincidem!', 'error')
        return redirect(url_for('index'))
    
    senha_hash = generate_password_hash(senha)
    conn = get_db()
    cursor = conn.cursor()
    
    try:
        cursor.execute(
            'INSERT INTO usuarios (username, email, senha) VALUES (?, ?, ?)',
            (username, email, senha_hash)
        )
        conn.commit()
        flash('Cadastro realizado com sucesso! Faça login para continuar.', 'success')
    except sqlite3.IntegrityError:
        flash('Erro: Nome de usuário já existe! Escolha outro.', 'error')
    finally:
        conn.close()
    
    return redirect(url_for('index'))

# Rota de login
@app.route('/login', methods=['POST'])
def login():
    """Processa o login do usuário"""
    username = request.form['username']
    senha = request.form['password']
    
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM usuarios WHERE username = ?', (username,))
    usuario = cursor.fetchone()
    conn.close()
    
    if usuario and check_password_hash(usuario['senha'], senha):
        session['usuario_id'] = usuario['id']
        session['usuario_nome'] = usuario['username']
        session['usuario_email'] = usuario['email']
        flash(f'Bem-vindo(a), {usuario["username"]}!', 'success')
        return redirect(url_for('painel'))
    else:
        flash('Usuário ou senha inválidos!', 'error')
        return redirect(url_for('index'))

# Rota do painel principal
@app.route('/painel')
@login_required
def painel():
    """Exibe o painel principal do sistema"""
    return render_template(
        'painel.html', 
        nome=session['usuario_nome'],
        email=session.get('usuario_email', '')
    )

# Rota de edição de perfil
@app.route('/perfil', methods=['GET', 'POST'])
@login_required
def editar_perfil():
    """Exibe e processa a edição do perfil do usuário"""
    
    conn = get_db()
    cursor = conn.cursor()
    
    if request.method == 'POST':
        novo_username = request.form.get('username', '').strip()
        novo_email = request.form.get('email', '').strip()
        senha_atual = request.form.get('senha_atual', '').strip()
        nova_senha = request.form.get('nova_senha', '').strip()
        confirma_senha = request.form.get('confirma_senha', '').strip()
        
        cursor.execute('SELECT * FROM usuarios WHERE id = ?', (session['usuario_id'],))
        usuario = cursor.fetchone()
        
        # Se estiver alterando a senha
        if senha_atual and nova_senha:
            if not check_password_hash(usuario['senha'], senha_atual):
                flash('Senha atual incorreta!', 'error')
                conn.close()
                return redirect(url_for('editar_perfil'))
            
            if nova_senha != confirma_senha:
                flash('As novas senhas não coincidem!', 'error')
                conn.close()
                return redirect(url_for('editar_perfil'))
            
            if len(nova_senha) < 8:
                flash('A nova senha deve ter no mínimo 8 caracteres!', 'error')
                conn.close()
                return redirect(url_for('editar_perfil'))
            
            nova_senha_hash = generate_password_hash(nova_senha)
            try:
                cursor.execute(
                    'UPDATE usuarios SET username = ?, email = ?, senha = ? WHERE id = ?',
                    (novo_username, novo_email, nova_senha_hash, session['usuario_id'])
                )
                conn.commit()
                session['usuario_nome'] = novo_username
                session['usuario_email'] = novo_email
                flash('Perfil e senha atualizados com sucesso!', 'success')
            except sqlite3.IntegrityError:
                flash('Nome de usuário já existe!', 'error')
        else:
            try:
                cursor.execute(
                    'UPDATE usuarios SET username = ?, email = ? WHERE id = ?',
                    (novo_username, novo_email, session['usuario_id'])
                )
                conn.commit()
                session['usuario_nome'] = novo_username
                session['usuario_email'] = novo_email
                flash('Perfil atualizado com sucesso!', 'success')
            except sqlite3.IntegrityError:
                flash('Nome de usuário já existe!', 'error')
        
        conn.close()
        return redirect(url_for('painel'))
    
    # GET - Exibe formulário
    cursor.execute('SELECT * FROM usuarios WHERE id = ?', (session['usuario_id'],))
    usuario = cursor.fetchone()
    conn.close()
    
    return render_template('editar_perfil.html', usuario=usuario)

# Rota de logout
@app.route('/logout')
def logout():
    """Faz logout do usuário"""
    nome_usuario = session.get('usuario_nome', 'Usuário')
    session.clear()
    flash(f'Até logo, {nome_usuario}!', 'success')
    return redirect(url_for('index'))

# Executa a aplicação
if __name__ == '__main__':
    app.run(debug=True)