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
CAN'T          | switch
GET            | case
OVER           | break
AS BALADAS     | default
VAI            | continue
ARREBENTA      | return
SABADAÇO       | function
GILBARROWS     | => (arrow. sim, é um trocadilho horrível)

  
## Exemplo de código
```javascript
KASINAO constante É 54;

DESTAQUE (constante ÉÉ 54)
BOA NOITE
    VAIDJ("ÉÉÉÉÉ");
BOA TARDE
INTERNACIONAL
BOA NOITE
    VAIDJ("NÃO ÉÉÉÉÉ");
BOA TARDE
```