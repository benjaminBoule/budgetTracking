const mongoose = require('mongoose');
const { Schema } = mongoose;

// Enum for different types of transactions
const TransactionType = {
  INCOME: 'Income',
  EXPENSE: 'Expense',
  TRANSFER: 'Transfer',
};

// Enum for income subtypes
const IncomeSubtype = {
  TAXES: 'TAXES',
  GIFT: 'GIFT',
  SALES: 'SALES',
  REWARDS: 'REWARDS',
  COMPENSATION: 'COMPENSATION',
  PAYCHECK: 'PAYCHECK',
  OTHERS: 'OTHERS',
};

// Enum for expense subtypes
const ExpenseSubtype = {
  INVESTMENT: 'INVESTMENT',
  HOUSE_BUYING: 'HOUSE_BUYING',
  STAFF_FOR_KIDS: 'STAFF_FOR_KIDS',
  INSURANCE: 'INSURANCE',
  RENT: 'RENT',
  TAXES: 'TAXES',
  MOTHER_OR_OTHER_FAMILY: 'MOTHER_OR_OTHER_FAMILY',
  DONATIONS: 'DONATIONS',
  CREDIT_CARD: 'CREDIT_CARD',
  LOAN: 'LOAN',
  OTHERS: 'OTHERS',
};

// Create a schema for the budget transaction model
const budgetTransactionSchema = new Schema({
  transactionType: {
    type: String,
    enum: Object.values(TransactionType),
    required: true,
  },
  incomeType: {
    type: String,
    enum: Object.values(IncomeSubtype),
    required: function () {
      return this.transactionType === TransactionType.INCOME;
    },
  },
  expenseType: {
    type: String,
    enum: Object.values(ExpenseSubtype),
    required: function () {
      return this.transactionType === TransactionType.EXPENSE;
    },
  },
  transferType: {
    type: String,
    default: undefined,
  },
  accountFrom: {
    type: String,
  },
  accountTo: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: false,
  },
  imageProof: {
    type: String,
  },
}, {
  versionKey: false, // Don't include the "__v" field
});

// Create and export the BudgetTransaction model
const BudgetTransactionModel = mongoose.model('BudgetTransaction', budgetTransactionSchema);

module.exports = BudgetTransactionModel;