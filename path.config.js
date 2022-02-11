// alias for IDE(PHPSTORM)
const path = require("path");
const pathAlias = require('./path.alias.js');

module.exports = {
    resolve: {
        alias: {
            ...pathAlias
        }
    }
};