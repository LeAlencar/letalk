import { NextFunction, Request, Response } from "express";
import LoanModel from "./LoanModel";

interface Iinstallments {
  installment?: number;
  value?: string;
  fees?: string
  installmentValue?: number
}

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
  let installmentValue = req.body.installmentValue
  const uf = req.body.uf
  let tax = 0

  if (uf == 'MG') {
   tax = 0.01
  } else if (uf == 'SP') {
   tax = 0.08
  } else if (uf == 'RJ') {
   tax = 0.09
  } else {
   tax = 0.011
  }

  let fee = loanValue * tax
  const finalValue = loanValue + fee
  const installments = Math.ceil(finalValue / installmentValue)
  let totalToPay = finalValue
  let totalFees = fee

  

  let installmentsToPay:Iinstallments[] = []
  let ActualInstallment = 1

  while (ActualInstallment <= installments) {
  
    installmentsToPay.push({
      installment: ActualInstallment,
      value: totalToPay.toFixed(2),
      fees: fee.toFixed(2),
      installmentValue: installmentValue
    })

    if (installmentValue >= totalToPay) {
      totalToPay = totalToPay - totalToPay
      
    } else {
      totalToPay = totalToPay - installmentValue
    }
    
    
    fee = totalToPay * tax
    totalToPay = totalToPay + fee
    totalFees = totalFees + fee
    ActualInstallment++
    
  }


  try {
    res.status(200).json({
      status: "Loan simulated with success",
      data: {
        uf: uf,
        loanValue: loanValue,
        finalValue: finalValue,
        installmentValue: 15000,
        installments: installments,
        totalFees: totalFees.toFixed(2),
        tax: tax,
        installmentsToPay: installmentsToPay
      }
    })
  } catch(err) {
    res.status(500).json({
      status: "Failed to simulate a new loan",
      message: err
    })
  }
}