import mongoose, { Schema, Model, Document } from 'mongoose'

export interface ILoan extends Document {
  email: string;
  cpf: string;
  birthDate: Date;
  totalValue: number;
  installmentValue: number
}

const LoanSchema = new Schema<ILoan>(
  {
    email: {
      type: String,
      required: true
    }, 
    cpf: {
      type: String,
      required: true
    },
    birthDate: {
      type: Date,
      required: true
    },
    totalValue: {
      type: Number,
      required: true
    },
    installmentValue: {
      type: Number,
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