import { NextFunction, Request, Response } from "express";
import LoanModel from "./LoanModel";

export const createLoan = async(req: Request, res: Response, next: NextFunction) => {
  const loanValue = req.body.loanValue 
  const installments = req.body.installments
  const uf = req.body.uf
  let tax = 0

  if (uf == 'MG') {
   tax = 1.01
  } else if (uf == 'SP') {
   tax = 1.008
  } else if (uf == 'RJ') {
   tax = 1.009
  } else {
   tax = 1.0111
  }

  const finalValue = loanValue * tax


  const installmentValue = loanValue / installments

  const loan = new LoanModel({
    email: req.body.email,
    cpf: req.body.cpf,
    totalValue: finalValue,
    installmentValue: installmentValue,
    birthDate: req.body.birthDate

  })

  try {
    await loan.save()
    res.status(201).json({
      status: "Loan created with Success",
      data: {
        loan
      }
    })
  } catch(err) {
    res.status(500).json({
      status: "Failed to create a new loan",
      message: err
    })
  }
}

export const simulateLoan = async(req: Request, res: Response, next: NextFunction) => {
  const loanValue = req.body.loanValue 
  const installmentValue = req.body.installmentValue
  const uf = req.body.uf
  let tax = 0

  if (uf == 'MG') {
   tax = 1.01
  } else if (uf == 'SP') {
   tax = 1.008
  } else if (uf == 'RJ') {
   tax = 1.009
  } else {
   tax = 1.0111
  }

  const finalValue = loanValue * tax


  const installments = finalValue / installmentValue

  try {
    res.status(200).json({
      status: "Loan created with Success",
      data: {
        uf: uf,
        loanValue: loanValue,
        finalValue: finalValue,
        installmentValue: installmentValue,
        installments: installments,
        tax: tax
      }
    })
  } catch(err) {
    res.status(500).json({
      status: "Failed to create a new loan",
      message: err
    })
  }
}