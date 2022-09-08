"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./database/database");
const LoanRouter_1 = __importDefault(require("./modules/Loan/LoanRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', function (req, res) {
    res.send("Hello World");
});
try {
    (0, database_1.connectDB)();
}
catch (err) {
    console.error("Unable to connect to database");
}
app.use("/loans", LoanRouter_1.default);
app.listen(9000, () => {
    console.log("Server running on port 9000");
});
