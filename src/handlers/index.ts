import fs from 'fs';

const allHandlers: any = {};
fs.readdirSync(__dirname)
    .filter((file: string) => file.match(/(js)$/) && file !== __filename)
    .forEach((file: string) => {
        requireFile(file);
    });

export default allHandlers;
function requireFile(file: string) {
    allHandlers[file.split('.js')[0]] = require(`./${file}`).default;
}
