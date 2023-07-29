// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const transactionRouter = require("./routers/transactionRouter");
const userRouter = require('./routers/userRouter')

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/transactions', transactionRouter)
app.use('/user', userRouter)

// MongoDB Setup
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
