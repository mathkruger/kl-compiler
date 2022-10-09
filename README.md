# KASINO Language Compiler


Linguagem baseada no grande [KASINÃO NO SABADAÇO](https://www.youtube.com/watch?v=LCDaw0QmQQc&ab_channel=TeleguiadoTV).  
  
![Coverage lines](./coverage/badge-lines.svg)
![Coverage lines](./coverage/badge-functions.svg)
![Coverage lines](./coverage/badge-statements.svg)

----------

## Modo de usar
### Compilador
Para rodar o compilador, basta executar o comando:  
`npm start c:/caminho-do-arquivo-com-o-codigo.kl`  
Para rodar o compilador com debug:  
`npm run debug c:/caminho-do-arquivo-com-o-codigo.kl`
  

### API
A API pode ser executada de duas formas:  
* Clonando o projeto e executando:  
`npm run api:run`

* Via docker, usando o comando:  
`sudo docker run -d -p 1232:3333 --name kasino-lang-api mathkruger/kasino-language-api` (Lembrando que a porta 1232 pode ser qualquer porta disponível)
-------

Por decisão minha, os arquivos do KL terão final `.kl`.

## Sintaxe

Ainda está em construção, sinta-se livre para contribuir.

KL             | JS
---------------| ------
KASINO         | let
KASINAE        | var
KASINAO        | const
VAIDJ          | console.log
É              | =
DESTAQUE       | if
INTERNACIONAL  | else
BOA NOITE      | {
BOA TARDE      | }
ABRE           | (
FECHA          | )
CAN'T          | switch
GET            | case
OVER           | break
AS BALADAS     | default
VAI            | continue
ARREBENTA      | return
SABADAÇO       | function
GILBARROWS     | => (arrow. sim, é um trocadilho horrível)
MAIOR          | >
MENOR          | <
NAUM           | !
SOMAE          | +
MENOSAE        | -
CALMAE         | async
ESPERAE        | await
EXPORTAE       | module.exports
CHAMA          | Só um jeito de indicar que uma função está sendo chamada, não significa nada.

  
## Exemplo de código
```javascript
KASINAO constante É 54;

DESTAQUE ABRE constante ÉÉ 54 FECHA
BOA NOITE
    CHAMA VAIDJ ABRE "ÉÉÉÉÉ" FECHA;
BOA TARDE
INTERNACIONAL
BOA NOITE
    CHAMA VAIDJ ABRE "NÃO ÉÉÉÉÉ" FECHA;
BOA TARDE
```

## Exemplo de projeto escrito em KL

Achou que não dava pra escrever sua API de CRUD totalmente em KL? Achou errado OTÁRIO!!!!

[VEJA COM SEUS PRÓPRIOS OLHOS](https://github.com/mathkruger/simple-api-kl)