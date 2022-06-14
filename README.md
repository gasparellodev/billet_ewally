# Teste Técnico do Boleto - Ewally

## Descrição do projeto

Projeto desenvolvido para consultar linhas digitáveis de boleto de título bancário e pagamento de concessionárias.

Projeto disponibilizado para execução em container Docker ou local.

Aplicadas técnicas de TDD, DDD e Clean Code.


## Ambiente


1. NodeJS  v16.5.0
2. NPM 8.11


## Preparação do Ambiente


1. Clone o repositório 


```

git clone https://github.com/gasparellodev/billet_ewally.git

```

2. Resolver as dependencias do projeto


```
npm install
```
**OU**

```
yarn 
```


3. Inicializar o projeto

*O projeto poderá ser inicializado no local ou em um container Docker.*


3.1 **Local**


```
npm run server
```
**OU**

```
yarn server
```

3.2 **Docker**


*Para subir o container*

```
docker-compose up -d
```

*Para acessar o container*

```
  docker exec -it billet_ewally bash
```

*Para finalizar o container*

```
docker-compose down
```


4. Para realizar a validação do boleto informe a linha de código na url do navegardor ou utilizando um tester de APIs, como recomendação irei deixar o <a href="https://web.postman.co/home" target="_blank">Postman</a>

conforme abaixo:


```
http://localhost:8080/billet/23793381286008386627105000063304890170000100000
```

O retorno para a consulta será:


```
{
  "barcode": "2379901700001000003381260083866270500006330",
    "amount": "1,000.00",
    "expirationDate": "2022-06-15"
}
```

Erros e validações negativas são tratados como exceptions como no exemplo abaixo que retorna um boleto expirado, cada exceção tem sua mensagem identificando o erro ocorrido:


```
Error: Expired due date!
    at new BilletController (/home/developer/Projects/billet_ewally/src/Controllers/BilletController.ts:8:47)
```


5. Testes unitários


5.1 **Local**

```
npm run test
```
**OU**

```
yarn test
```


5.2 **Docker**

```
docker exec -it billet_ewally npm run test
```


6. Cobertura de código:

6.1 **Local**

```
npm run coverage ou yarn coverage
```

6.2 **Docker**

```
docker exec -it billet_ewally npm run coverage
```

O arquivo html da cobertura fica localizado no projeto, no seguinte caminho:

```
billet_ewally\coverage\lcov-report\index.html
```
