CREATE TABLE Clientes (
    ClienteID INT NOT NULL,
    Nome VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL
);


INSERT INTO Clientes (ClienteID, Nome, Email) VALUES
(1, 'Lucas Dias', 'lucas.dias@example.com'),
(2, 'Fernanda Nunes', 'fernanda.nunes@example.com'),
(3, 'Marcos Oliveira', 'marcos.oliveira@example.com'),
(4, 'Camila Ferreira', 'camila.ferreira@example.com');


Caminhos:

http://localhost:3030/consulta-dados

http://localhost:3030/liveness

http://localhost:3030/readiness



Para executar o contêiner da sua aplicação Node.js: 

-- docker run -d -p 3030:3000 --name atividade4-app atividade4-app


Comando para executar o banco de dados MySQL usando Docker:

--docker run -d --name atividadeaula4 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql:latest



Link Github:

https://github.com/FabianoFuzetto/atividade4


Link Docker Hub:
https://hub.docker.com/repository/docker/fabianofuzetto/atividade4-db-1/general

