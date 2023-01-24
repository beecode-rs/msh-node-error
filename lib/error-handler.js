"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
exports.errorHandler = {
    expressMiddleware: (err, _req, res, _next) => {
        var _a;
        const code = (_a = err.httpCode) !== null && _a !== void 0 ? _a : 500;
        return res.status(code).json({
            status: 'error',
            code,
            message: err.message,
        });
    },
};
//# sourceMappingURL=error-handler.js.map