module.exports = (klCode) => {
    let code = klCode;
    if (code == null) return "";

    // Variable structures
    code = code.replace(new RegExp("(KASINO)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), 'let');
    code = code.replace(new RegExp("(KASINAE)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), 'var');
    code = code.replace(new RegExp("(KASINAO)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), 'const');

    code = code.replace(new RegExp("(->)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), '.');

    // modules
    code = code.replace(new RegExp("(EXPORTAE)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), 'module.exports');
    code = code.replace(new RegExp("(REQUISITAE)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), 'require');

    code = code.replace(new RegExp("(CALMAE)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), 'async');
    code = code.replace(new RegExp("(ESPERAE)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), 'await');

    // Output
    code = code.replace(new RegExp("(VAIDJ)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), 'console.log');

    // Operators
    code = code.replace(new RegExp("(É)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), '=');
    code = code.replace(new RegExp("(ÉÉ)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), '==');
    code = code.replace(new RegExp("(MAIOR)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), '>');
    code = code.replace(new RegExp("(MENOR)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), '<');
    code = code.replace(new RegExp("(NAUM)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), '!');
    code = code.replace(new RegExp("(GILBARROWS)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), '=>');
    code = code.replace(new RegExp("(VERDADE)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), 'true');
    code = code.replace(new RegExp("(FALSO)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), 'false');
    code = code.replace(new RegExp("(SOMAE)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), '+');
    code = code.replace(new RegExp("(MENOSAE)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), '-');


    // Conditional
    code = code.replace(new RegExp("(DESTAQUE)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), 'if');
    code = code.replace(new RegExp("(INTERNACIONAL)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), 'else');

    // Symbols
    code = code.replace(new RegExp("(BOA NOITE)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), '{');
    code = code.replace(new RegExp("(BOA TARDE)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), '}');

    // Switch-case structure
    code = code.replace(new RegExp("(CAN'T)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), 'switch');
    code = code.replace(new RegExp("(GET)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), 'case');
    code = code.replace(new RegExp("(OVER)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), 'break');
    code = code.replace(new RegExp("(BABY)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), 'default');

    // For loop
    code = code.replace(new RegExp("(AS BALADAS)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), 'for');
    code = code.replace(new RegExp("(VAI)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), 'continue');
    code = code.replace(new RegExp("(ARREBENTA)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), 'return');

    // function
    code = code.replace(new RegExp("(CHAMA)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), '');
    code = code.replace(new RegExp("(SABADAÇO)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), 'function');

    // delimitadores
    code = code.replace(new RegExp("(ABRE)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), '(');
    code = code.replace(new RegExp("(FECHA)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), ')');

    // comentários
    code = code.replace(new RegExp("(\/COMENTAE)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), '//');
    code = code.replace(new RegExp("(\/COMENTASSO)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), '/*');
    code = code.replace(new RegExp("(COMENTASSO\/)(?=(?:[^\"]|\"[^\"]*\")*$)", "g"), '*/');

    return code;
}