const fs = require('fs');
const yargs = require('yargs');
const highlight = require('cli-highlight').highlight

const parse = require('./functions/parse/parse');
const execute = require('./functions/execute/execute');

const input = yargs.argv;
const FILE = input.file;
const DEBUG = input.debug == 'true' || input.debug === true;

if (!FILE || typeof FILE !== 'string') {
    throw new Error('--file is required!');
}

const isExtensionKL = FILE.match(/^.*\.kl$/i);
if (!isExtensionKL)
    throw new Error('Only KL extension is accepted');

fs.readFile(FILE, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    const translatedCode = parse(data);
    
    if (DEBUG) {
        console.log('Código traduzido: ');
        console.log(highlight(translatedCode, {language: 'javascript', ignoreIllegals: true}));
        console.log('\nSaída:');
    }

    const result = execute(translatedCode);
    console.log(result);
});