const parse = require('./parse');

describe('Testando função parse', () => {
    it('Recebe nulo e retorna uma string vazia', () => {
        const codigo = null;
        const retornoEsperado = '';
        const retorno = parse(codigo);

        expect(retorno).toEqual(retornoEsperado);
    });

    it('Teste de sintaxe VAIDJ (console.log)', () => {
        const codigo = `VAIDJ("AE KASINAO")`;
        const retornoEsperado = 'console.log("AE KASINAO")';
        const retorno = parse(codigo);

        expect(retorno).toEqual(retornoEsperado);
    });

    it('Teste de sintaxe de variáveis e constantes', () => {
        const codigo = `KASINO a É 1; KASINAE b É 2; KASINAO c É 3;`;
        const retornoEsperado = 'let a = 1; var b = 2; const c = 3;';
        const retorno = parse(codigo);

        expect(retorno).toEqual(retornoEsperado);
    });

    it('Teste de sintaxe operadores', () => {
        const codigo = `KASINO a É 1; VAIDJ(a ÉÉ 1); VAIDJ(a MAIORÉ 1); VAIDJ(a MENORÉ 1); VAIDJ(a NAUMÉ 1);`;
        const retornoEsperado = 'let a = 1; console.log(a == 1); console.log(a >= 1); console.log(a <= 1); console.log(a != 1);';
        const retorno = parse(codigo);

        expect(retorno).toEqual(retornoEsperado);
    });

    it('Teste de sintaxe if-else e {}', () => {
        const codigo = `KASINO a É 1; DESTAQUE (a ÉÉ 1) BOA NOITE VAIDJ("É 1"); BOA TARDE INTERNACIONAL BOA NOITE VAIDJ("NÃO É 1"); BOA TARDE`;
        const retornoEsperado = 'let a = 1; if (a == 1) { console.log("É 1"); } else { console.log("NÃO É 1"); }';
        const retorno = parse(codigo);

        expect(retorno).toEqual(retornoEsperado);
    });
});