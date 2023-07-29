const BudgetTransactionModel = require('../model/transactionModel');

// Controller function to get all transactions
const getAllTransactions= async (req, res) => {
  try {
    const transactions = await BudgetTransactionModel.find({}).sort({ timestamp: -1 });
    res.json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ 
        error: 'Server error',
        message: error.message
     });
  }
}

// Controller function to add a new transaction
async function addTransaction(req, res) {
  try {
    const {
      transactionType,
      incomeType,
      expenseType,
      transferType,
      accountFrom,
      accountTo,
      amount,
      timestamp,
      description,
      category,
      accountType,
      imageProof,
    } = req.body;

    const newTransaction = new BudgetTransactionModel({
      transactionType,
      incomeType,
      expenseType,
      transferType,
      accountFrom,
      accountTo,
      amount,
      timestamp,
      description,
      category,
      accountType,
      imageProof,
    });

    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    console.error('Error adding transaction:', error);
    res.status(500).json({ error: 'Server error' });
  }
}

// Controller function to update a transaction by ID
async function updateTransaction(req, res) {
  try {
    const { id } = req.params;
    const {
      transactionType,
      incomeType,
      expenseType,
      transferType,
      accountFrom,
      accountTo,
      amount,
      timestamp,
      description,
      category,
      accountType,
      imageProof,
    } = req.body;

    const updatedTransaction = await BudgetTransactionModel.findByIdAndUpdate(
      id,
      {
        transactionType,
        incomeType,
        expenseType,
        transferType,
        accountFrom,
        accountTo,
        amount,
        timestamp,
        description,
        category,
        accountType,
        imageProof,
      },
      { new: true } // Set {new: true} to return the updated document
    );

    if (!updatedTransaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.json(updatedTransaction);
  } catch (error) {
    console.error('Error updating transaction:', error);
    res.status(500).json({ error: 'Server error' });
  }
}

// Controller function to delete a transaction by ID
async function deleteTransaction(req, res) {
  try {
    const { id } = req.params;
    await BudgetTransactionModel.findByIdAndDelete(id);
    res.json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    console.error('Error deleting transaction:', error);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = {
  getAllTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
};
