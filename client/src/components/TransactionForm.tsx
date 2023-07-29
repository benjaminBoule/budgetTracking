import { Add } from "@mui/icons-material"
import { Button, Container, FormControl, FormControlLabel, Grid, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material"
import { useState } from "react"
import AccountList from "./accountList"
import axios from "axios"

enum IncomeSubtype {
    TAXES = 'TAXES',
    GIFT = 'GIFT',
    SALES = 'SALES',
    REWARDS = 'REWARDS',
    COMPENSATION = 'COMPENSATION',
    PAYCHECK = 'PAYCHECK',
    OTHERS = 'OTHERS',
}

enum ExpenseSubtype {
    INVESTMENT = 'INVESTMENT',
    HOUSE_BUYING = 'HOUSE_BUYING',
    STAFF_FOR_KIDS = 'STAFF_FOR_KIDS',
    INSURANCE = 'INSURANCE',
    RENT = 'RENT',
    TAXES = 'TAXES',
    MOTHER_OR_OTHER_FAMILY = 'MOTHER_OR_OTHER_FAMILY',
    DONATIONS = 'DONATIONS',
    CREDIT_CARD = 'CREDIT_CARD',
    LOAN = 'LOAN',
    OTHERS = 'OTHERS',
}

enum TransactionType {
    INCOME = 'INCOME',
    EXPENSE = 'EXPENSE',
    TRANSFER = 'TRANSFER',
}

const TransactionForm: React.FC = () => {
    type TransactionType = 'Expense' | 'Income' | 'Transfer'
    interface Account {
        id: string,
        name: string,
        balance: string
    }

    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')
    const [type, setType] = useState<TransactionType>("Expense")
    
    const [accountList, SetAccountList] = useState<Account[]>(AccountList)
    const [selectFromAccount, SetSelectFromAccount] = useState<string | undefined>("")
    const [selectedAccount, SetSelectedAccount] = useState<string | undefined>("")
    const [selectedToAccount, SetSelectedToAccount] = useState<string | undefined>("")
    const [subType, setSubType] = useState<IncomeSubtype | ExpenseSubtype | string>("");


    const handleSubmit = async () => {
        try {
            const formData = {
                transactionType: type,
                incomeType: type === "Income" ? subType : undefined,
                expenseType: type === "Expense" ? subType : undefined,
                transferType: type === "Transfer" ? "Transfer" : undefined,
                accountFrom: selectFromAccount,
                accountTo: selectedToAccount,
                amount: amount,
                description: text
            };
    
            const res = await axios.post('http://localhost:8000/transactions', formData);
            console.log(res.data);
        } catch(err) {
            console.error(err);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ py: 4}}>
            <Typography variant="h5" component="h2" align="center" sx={{mb: 4}}>
                Add Transaction
            </Typography>
            
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControl component="fieldset" fullWidth>
                        <RadioGroup
                        row
                        name="transactionType"
                        value={type}
                        onChange={(e) => setType(e.target.value as TransactionType)}
                        >
                        <FormControlLabel value="Expense" control={<Radio />} label="Expense" />
                        <FormControlLabel value="Income" control={<Radio />} label="Income" />
                        <FormControlLabel value="Transfer" control={<Radio />} label="Transfer" />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <Select
                            value={subType}
                            onChange={(e) => setSubType(e.target.value as IncomeSubtype | ExpenseSubtype)}
                            displayEmpty
                        >
                            <MenuItem value="" disabled>
                                Select Subtype
                            </MenuItem>
                            {Object.values(
                                type === "Income" ? IncomeSubtype : ExpenseSubtype
                            ).map((subtype) => (
                                <MenuItem key={subtype} value={subtype}>
                                    {subtype}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>


                {type === 'Expense' || type === 'Income' ? (
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <Select
                                value={selectFromAccount}
                                onChange={(e)=>SetSelectFromAccount(e.target.value)}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>
                                    select Account
                                </MenuItem>
                                {accountList.map(
                                    (account) => 
                                        <MenuItem key={account.id} value={account.name}>
                                            {account.name} (${account.balance})
                                        </MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </Grid>):(
                        <Grid container item xs={12} spacing={2}>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <Select
                                        value={selectFromAccount}
                                        onChange={(e)=>SetSelectFromAccount(e.target.value)}
                                        displayEmpty
                                    >
                                        <MenuItem value="" disabled>
                                            select Account
                                        </MenuItem>
                                        {accountList.map(
                                            (account) => 
                                                <MenuItem key={account.id} value={account.name}>
                                                    {account.name} (${account.balance})
                                                </MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                            <FormControl fullWidth>
                                <Select
                                    value={selectedToAccount}
                                    onChange={(e)=>{SetSelectedToAccount(e.target.value)}}
                                    displayEmpty
                                >
                                    <MenuItem value="" disabled>
                                        Select Account
                                    </MenuItem>
                                    {accountList.map(
                                        (account) => 
                                            <MenuItem key={account.id} value={account.name}>
                                                {account.name} (${account.balance})
                                            </MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                )}


                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Description"
                        variant="outlined"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Amount"
                        variant="outlined"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </Grid>
                
                
                <Grid item xs={6}>
                    <Button variant="contained" startIcon={<Add />} onClick={handleSubmit} fullWidth>
                        Add Transaction
                    </Button>
                </Grid>
            </Grid>        
        </Container>
    )
}

export default TransactionForm