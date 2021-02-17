const execute = require('../../compiler/functions/execute');
const parse = require('../../compiler/functions/parse');

module.exports = {    
    async compile(request, response) {
        const { code } = request.body;
        const klCode = parse(code);
        const result = execute(klCode);
        return response.json({ result });
    }
}