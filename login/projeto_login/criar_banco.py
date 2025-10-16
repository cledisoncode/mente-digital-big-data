import sqlite3

# Conecta ao banco de dados (cria o arquivo se não existir)
conn = sqlite3.connect('usuarios.db')
cursor = conn.cursor()

# Cria a tabela de usuários
cursor.execute('''
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL,
    senha TEXT NOT NULL
)
''')

# Salva as alterações
conn.commit()
print('Banco de dados criado com sucesso!')

# Fecha a conexão
conn.close()