"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const error_base_1 = require("./error-base");
exports.errorHandler = {
    expressMiddleware: (err, _req, res, _next) => {
        const code = err instanceof error_base_1.ErrorBase ? err.HTTPErrorCode : 500;
        return res.status(code).json({
            status: 'error',
            code,
            message: err.message,
        });
    },
};
//# sourceMappingURL=error-handler.js.map