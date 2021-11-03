module.exports = (klCode) => {
    let code = klCode;
    if (code == null) return "";

    // Variable structures
    code = code.replace(/(KASINO)(?=(?:[^"]|"[^"]*")*$)/g, 'let');
    code = code.replace(/(KASINAE)(?=(?:[^"]|"[^"]*")*$)/g, 'var');
    code = code.replace(/(KASINAO)(?=(?:[^"]|"[^"]*")*$)/g, 'const');

    // modules
    code = code.replace(/(VAI_EXPORTA)(?=(?:[^"]|"[^"]*")*$)/g, 'module.exports')

    code = code.replace(/(CALMAE)(?=(?:[^"]|"[^"]*")*$)/g, 'async');
    code = code.replace(/(ESPERA)(?=(?:[^"]|"[^"]*")*$)/g, 'await');

    // Output
    code = code.replace(/(VAIDJ)(?=(?:[^"]|"[^"]*")*$)/g, 'console.log');

    // Operators
    code = code.replace(/(É)(?=(?:[^"]|"[^"]*")*$)/g, '=');
    code = code.replace(/(MAIOR)(?=(?:[^"]|"[^"]*")*$)/g, '>');
    code = code.replace(/(MENOR)(?=(?:[^"]|"[^"]*")*$)/g, '<');
    code = code.replace(/(NAUM)(?=(?:[^"]|"[^"]*")*$)/g, '!');
    code = code.replace(/(GILBARROWS)(?=(?:[^"]|"[^"]*")*$)/g, '=>');


    // Conditional
    code = code.replace(/(DESTAQUE)(?=(?:[^"]|"[^"]*")*$)/g, 'if');
    code = code.replace(/(INTERNACIONAL)(?=(?:[^"]|"[^"]*")*$)/g, 'else');

    // Symbols
    code = code.replace(/(BOA NOITE)(?=(?:[^"]|"[^"]*")*$)/g, '{');
    code = code.replace(/(BOA TARDE)(?=(?:[^"]|"[^"]*")*$)/g, '}');

    // Switch-case structure
    code = code.replace(/(CAN'T)(?=(?:[^"]|"[^"]*")*$)/g, 'switch');
    code = code.replace(/(GET)(?=(?:[^"]|"[^"]*")*$)/g, 'case');
    code = code.replace(/(OVER)(?=(?:[^"]|"[^"]*")*$)/g, 'break');
    code = code.replace(/(GOODBYE)(?=(?:[^"]|"[^"]*")*$)/g, 'default');

    // For loop
    code = code.replace(/(AS BALADAS)(?=(?:[^"]|"[^"]*")*$)/g, 'for');
    code = code.replace(/(VAI)(?=(?:[^"]|"[^"]*")*$)/g, 'continue');
    code = code.replace(/(ARREBENTA)(?=(?:[^"]|"[^"]*")*$)/g, 'return');

    // function
    code = code.replace(/(SABADAÇO)(?=(?:[^"]|"[^"]*")*$)/g, 'function');

    return code;
}