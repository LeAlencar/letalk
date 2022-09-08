"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateLoan = exports.createLoan = exports.getLoans = void 0;
const LoanModel_1 = __importDefault(require("./LoanModel"));
const getLoans = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loans = yield LoanModel_1.default.find({});
        res.json(loans);
    }
    catch (err) {
        console.log(`Error while querying ${err}`);
    }
});
exports.getLoans = getLoans;
const createLoan = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const loanValue = Number(req.body.loanValue);
    let installmentValue = Number(req.body.installmentValue);
    const uf = req.body.uf;
    let tax = 0;
    if (uf == 'MG') {
        tax = 0.01;
    }
    else if (uf == 'SP') {
        tax = 0.008;
    }
    else if (uf == 'RJ') {
        tax = 0.009;
    }
    else {
        tax = 0.011;
    }
    let fee = loanValue * tax;
    const finalValue = loanValue + fee;
    const installments = Math.ceil(finalValue / installmentValue);
    let totalToPay = finalValue;
    let totalFees = fee;
    let installmentsToPay = [];
    let ActualInstallment = 1;
    while (ActualInstallment <= installments) {
        installmentsToPay.push({
            installment: ActualInstallment,
            value: totalToPay.toFixed(2),
            fees: fee.toFixed(2),
            installmentValue: installmentValue
        });
        if (installmentValue >= totalToPay) {
            totalToPay = totalToPay - totalToPay;
        }
        else {
            totalToPay = totalToPay - installmentValue;
        }
        fee = totalToPay * tax;
        totalToPay = totalToPay + fee;
        totalFees = totalFees + fee;
        ActualInstallment++;
    }
    const loan = new LoanModel_1.default({
        cpf: req.body.cpf,
        birthDate: req.body.birthDate,
        uf: uf,
        loanValue: loanValue,
        finalValue: loanValue + Number(totalFees.toFixed(2)),
        installmentValue: 15000,
        installments: installments,
        totalFees: totalFees.toFixed(2),
        tax: tax,
        installmentsToPay: installmentsToPay
    });
    try {
        yield loan.save();
        res.status(201).json({
            status: "Loan created with success",
            data: {
                uf: uf,
                loanValue: loanValue,
                finalValue: loanValue + Number(totalFees.toFixed(2)),
                installmentValue: 15000,
                installments: installments,
                totalFees: totalFees.toFixed(2),
                tax: tax,
                installmentsToPay: installmentsToPay
            }
        });
    }
    catch (err) {
        res.status(500).json({
            status: "Failed to create a new loan",
            message: err
        });
    }
});
exports.createLoan = createLoan;
const simulateLoan = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const loanValue = Number(req.body.loanValue);
    let installmentValue = Number(req.body.installmentValue);
    const uf = req.body.uf;
    let tax = 0;
    if (uf == 'MG') {
        tax = 0.01;
    }
    else if (uf == 'SP') {
        tax = 0.008;
    }
    else if (uf == 'RJ') {
        tax = 0.009;
    }
    else {
        tax = 0.011;
    }
    let fee = loanValue * tax;
    const finalValue = loanValue + fee;
    const installments = Math.ceil(finalValue / installmentValue);
    let totalToPay = finalValue;
    let totalFees = fee;
    let installmentsToPay = [];
    let ActualInstallment = 1;
    while (ActualInstallment <= installments) {
        installmentsToPay.push({
            installment: ActualInstallment,
            value: totalToPay.toFixed(2),
            fees: fee.toFixed(2),
            installmentValue: installmentValue
        });
        if (installmentValue >= totalToPay) {
            totalToPay = totalToPay - totalToPay;
        }
        else {
            totalToPay = totalToPay - installmentValue;
        }
        fee = totalToPay * tax;
        totalToPay = totalToPay + fee;
        totalFees = totalFees + fee;
        ActualInstallment++;
    }
    try {
        res.status(200).json({
            status: "Loan simulated with success",
            data: {
                cpf: req.body.cpf,
                birthDate: req.body.birthDate,
                uf: uf,
                loanValue: loanValue,
                finalValue: loanValue + Number(totalFees.toFixed(2)),
                installmentValue: 15000,
                installments: installments,
                totalFees: totalFees.toFixed(2),
                tax: tax,
                installmentsToPay: installmentsToPay
            }
        });
    }
    catch (err) {
        res.status(500).json({
            status: "Failed to simulate a new loan",
            message: err
        });
    }
});
exports.simulateLoan = simulateLoan;
