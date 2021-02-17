const childProcess = require('child_process');
const fs = require('fs');

module.exports = (klCode) => {
    const tempFileName = Date.now() + '.js';
    fs.writeFileSync(tempFileName, klCode);
    const result = childProcess.execSync('node ' + tempFileName).toString();
    fs.unlinkSync(tempFileName);
    return result;
} 