const express = require('express');
const router = express.Router();
const {
  getAllTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transactionController.js');

// Route to get all transactions
router.get('/', getAllTransactions);

// Route to add a new transaction
router.post('/', addTransaction);

// Route to update a transaction by ID
router.put('/:id', updateTransaction);

// Route to delete a transaction by ID
router.delete('/:id', deleteTransaction);

module.exports = router;