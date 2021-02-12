const fs = require('fs');
const yargs = require('yargs');
const parse = require('./functions/parse');
const execute = require('./functions/execute');

const input = yargs.argv;
const FILE = input.file;
const DEBUG = input.debug == 'true';

if (!FILE) {
    throw new Error('--file is required!');
}

fs.readFile(FILE, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    const translatedCode = parse(data);
    if (DEBUG) {
        console.log(translatedCode);
    }
    const result = execute(translatedCode);
    console.log(result);
});