-- Criação da tabela Fornecedores
CREATE TABLE IF NOT EXISTS Fornecedores(
    Id INT NOT NULL,
    Nome VARCHAR(100) NOT NULL,
    Idade INT
    
);

-- Inserção de três linhas de exemplo
INSERT INTO Fornecedores (Id, Nome, Idade) VALUES
    (1, 'Fornecedor A', 30),
    (2, 'Fornecedor B', 35),
    (3, 'Fornecedor C', 40);
