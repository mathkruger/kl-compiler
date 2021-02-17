const execute = require('./execute');

describe('Testando função execute', () => {
    it('executar um console.log e retornar a saída', () => {
        const codigo = `console.log("Olá mundo")`;
        const retornoEsperado = `Olá mundo\n`;
        const retorno = execute(codigo);

        expect(retorno).toEqual(retornoEsperado);
    });
  });