import { Router } from "express";
import { simulateLoan, createLoan, getLoans } from "./LoanController";

const LoanRouter = Router()
LoanRouter.get('/', getLoans)
LoanRouter.post('/create', createLoan)
LoanRouter.post('/', simulateLoan)

export default LoanRouter