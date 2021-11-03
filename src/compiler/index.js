#!/usr/bin/env node

const fs = require('fs');
const fse = require('fs-extra');
const yargs = require('yargs');
const highlight = require('cli-highlight').highlight
const glob = require("glob");
const path = require('path');

const parse = require('./functions/parse/parse');
const execute = require('./functions/execute/execute');

const input = yargs.argv;
const FILE = input.file;
const PATH = input.path;
const OUTPUT = input.output;
const DEBUG = input.debug === 'true' || input.debug === true;
const IS_PROJECT = !FILE && PATH;

const getDirectories = function (extension, src, callback) {
    glob(src + '/**/*.' + extension, callback);
};

if (IS_PROJECT) {
    if (!PATH || typeof PATH !== 'string') {
        throw new Error('--path is required!');
    }

    getDirectories('kl', PATH, (err, res) => {
        if (err) {
            console.log('Error', err);
        }
        else {
            res.forEach(element => {
                fs.readFile(element, 'utf8', function (err, data) {
                    if (err) {
                        console.error(err);
                    }
                    
                    const translatedCode = parse(data);
                    const outputFilePath = path.join(OUTPUT, element.replace(PATH, '').replace('.kl', '.js'))
                    fse.outputFileSync(outputFilePath, translatedCode);
                    
                    if (DEBUG) {
                        console.log('File ' + outputFilePath + ' written');
                    }
                });
            });
        }
    });
}
else {
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
            console.log(highlight(translatedCode, { language: 'javascript', ignoreIllegals: true }));
            console.log('\nSaída:');
        }

        const result = execute(translatedCode);
        console.log(result);
    });
}