import mongoose, { Schema, Model, Document } from 'mongoose'
interface installmentToPay {
  fees: string
  installment: number
  installmentValue: number
  value: string
}
export interface ILoan extends Document {
  
  cpf: string;
  birthDate: Date;
  uf: string;
  loanValue: number;
  finalValue: number;
  installmentValue: number;
  installments: number;
  totalFees: string;
  tax: number;
  installmentsToPay: installmentToPay[]
}

const LoanSchema = new Schema<ILoan>(
  {
    cpf: {
      type: String,
      required: true
    },
    birthDate: {
      type: Date,
      required: true
    },
    uf: {
      type: String,
      required: true
    },
    loanValue: {
      type: Number,
      required: true
    },
    finalValue:{
      type: Number,
      required: true
    },
    installmentValue: {
      type: Number,
      required: true
    },
    installments: {
      type: Number,
      required: true
    },
    totalFees: {
      type: String,
      required: true
    },
    tax: {
      type: Number,
      required: true
    },
    installmentsToPay: {
      type : [] ,
      required: true
    },
  }, 
  {
    collection: "loans",
    timestamps: true
  }
)

const LoanModel: Model<ILoan> = mongoose.model("Loan", LoanSchema)

export default LoanModel