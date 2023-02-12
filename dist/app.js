"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const app = (0, express_1.default)();
const port = 3000;
// Serve static files from the public directory
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Use the Swagger UI middleware to display the API documentation
const spec = require('./api/openapi.json');
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(spec));
// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map