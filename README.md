# KASINO Language Compiler

Linguagem baseada no grande [KASINÃO NO SABADAÇO](https://www.youtube.com/watch?v=LCDaw0QmQQc&ab_channel=TeleguiadoTV).

----------

## Modo de usar
Para rodar o compilador, basta executar o comando:  
`npm start c:/caminho-do-arquivo-com-o-codigo.kl`  
Para rodar o compilador com debug:  
`npm run debug c:/caminho-do-arquivo-com-o-codigo.kl`

Para executar a API, execute esse comando:  
`npm run api:run`
  
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