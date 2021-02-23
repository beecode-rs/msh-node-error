"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBase = void 0;
const enum_1 = require("./enum");
class ErrorBase extends Error {
    constructor(errorCode, message) {
        super();
        this.__errorCode = errorCode;
        this.message = message !== null && message !== void 0 ? message : this.ErrorTypeName;
    }
    get ErrorCode() {
        return this.__errorCode;
    }
    get HTTPErrorCode() {
        return this.__errorCode;
    }
    get ErrorTypeName() {
        return this._replaceUnderscores(enum_1.ErrorCodeType[this.__errorCode]);
    }
    _replaceUnderscores(withUnderscores) {
        return withUnderscores.split('__').join('-').split('_').join(' ');
    }
}
exports.ErrorBase = ErrorBase;
//# sourceMappingURL=error-base.js.map