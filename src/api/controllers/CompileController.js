const execute = require('../../compiler/functions/execute/execute');
const parse = require('../../compiler/functions/parse/parse');

module.exports = {    
    async compile(request, response) {
        const { code } = request.body;
        const klCode = parse(code);
        const result = execute(klCode);
        return response.json({ result });
    }
}