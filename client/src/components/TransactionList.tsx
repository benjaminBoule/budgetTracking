import { Try } from "@mui/icons-material"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"

interface Transaction {
    id: string
    transactionType: string 
    incomeType: string
    expenseType: string
    transferType: string
    accountFrom: string
    accountTo: string
    amount: string
    description: string
}

const TransactionList: React.FC = ()=>{
    const [transactionsList, setTransactionsList] = useState<Transaction[]>([])

    useEffect(
        () => {
            const getTransactionsList = async () => {
                try {
                    const res = await axios.get('http://localhost:8000/transactions');
                    setTransactionsList(res.data)
                } catch (error) {
                    console.error(error)
                }
            };

            getTransactionsList();
        },[]
    )

    return(
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Type</TableCell>
                        <TableCell align="right">Income Type</TableCell>
                        <TableCell align="right">Expense Type</TableCell>
                        <TableCell align="right">Transfer Type</TableCell>
                        <TableCell align="right">From Account</TableCell>
                        <TableCell align="right">To Account</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        transactionsList.map(
                            (transaction) => 
                                <TableRow key={transaction.id}>
                                    <TableCell component="th" scope="row">
                                        {transaction.transactionType}
                                    </TableCell>
                                    <TableCell>{transaction.incomeType}</TableCell>
                                    <TableCell>{transaction.expenseType}</TableCell>
                                    <TableCell>{transaction.transferType}</TableCell>
                                    <TableCell>{transaction.accountFrom}</TableCell>
                                    <TableCell>{transaction.accountTo}</TableCell>
                                    <TableCell align="right">{transaction.amount}</TableCell>
                                    <TableCell>{transaction.description}</TableCell>
                                </TableRow>
                            )
                        
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TransactionList;
