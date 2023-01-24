"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeErrorBase = exports.NodeErrorBase = void 0;
const string_util_1 = require("./util/string-util");
class NodeErrorBase extends Error {
    constructor(params) {
        const { httpCode, name = string_util_1.stringUtil.codeNameFromEnum(httpCode), message = `${httpCode} - ${name}`, payload } = params;
        super(message);
        this.httpCode = httpCode;
        this.name = name;
        this.payload = payload;
    }
}
exports.NodeErrorBase = NodeErrorBase;
// TODO I was unable to use ConstructorParameters here, not sure why :thinking:
// export const nodeErrorBase = <T extends NodeErrorPayload = any>(...params: ConstructorParameters<typeof NodeErrorBase<T>>): NodeErrorBase<T> => {
// return new NodeErrorBase<T>(...params)
const nodeErrorBase = (params) => {
    return new NodeErrorBase(params);
};
exports.nodeErrorBase = nodeErrorBase;
//# sourceMappingURL=node-error-base.js.map