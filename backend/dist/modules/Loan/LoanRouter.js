"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoanController_1 = require("./LoanController");
const LoanRouter = (0, express_1.Router)();
LoanRouter.get('/', LoanController_1.getLoans);
LoanRouter.post('/create', LoanController_1.createLoan);
LoanRouter.post('/', LoanController_1.simulateLoan);
exports.default = LoanRouter;
