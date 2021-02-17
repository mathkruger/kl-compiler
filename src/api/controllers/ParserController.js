const parse = require('../../compiler/functions/parse/parse');

module.exports = {    
    async parse(request, response) {
        const { code } = request.body;
        const result = parse(code);
        return response.json({ result });
    }
}