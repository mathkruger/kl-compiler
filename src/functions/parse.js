module.exports = (klCode) => {
    let code = klCode;
    if (code == null) return "";

    // Variable structures
    code = code.replace(/(KASINO)(?=(?:[^"]|"[^"]*")*$)/g, 'let');
    code = code.replace(/(KASINAO)(?=(?:[^"]|"[^"]*")*$)/g, 'const');

    // Output
    code = code.replace(/(VAI DJ)(?=(?:[^"]|"[^"]*")*$)/g, 'console.log');

    // Operators
    code = code.replace(/(É)(?=(?:[^"]|"[^"]*")*$)/g, '=');

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

    // Array methods

    return code;
}