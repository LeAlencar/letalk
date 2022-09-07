import { Router } from "express";
import { simulateLoan, createLoan } from "./LoanController";

const LoanRouter = Router()

LoanRouter.post('/create', createLoan)
LoanRouter.get('/', simulateLoan)

export default LoanRouter