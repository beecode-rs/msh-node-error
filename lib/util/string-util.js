"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringUtil = void 0;
const http_response_code_1 = require("../http-response-code");
exports.stringUtil = {
    codeNameFromEnum: (codeEnum) => {
        const nameWithUnderscore = http_response_code_1.HttpResponseCodeMapper[codeEnum];
        if (!nameWithUnderscore)
            return 'Unknown error code name';
        return nameWithUnderscore.split('__').join('-').split('_').join(' ');
    },
};
//# sourceMappingURL=string-util.js.map