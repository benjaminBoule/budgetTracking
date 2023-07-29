import { FormControl, Grid, MenuItem, Select } from '@mui/material'
import React from 'react'

type Props = {
    value: string
    handler: any
    list:{
        id: string
        name: string
        balance: string
    }[]
}

const formControoler = (props: Props) => {
  return (
    <Grid item xs={12}>
        <FormControl fullWidth>
            <Select
                value={props.value}
                onChange={props.handler}
                displayEmpty
            >
                <MenuItem value="" disabled>
                    select Account
                </MenuItem>
                {props.list.map(
                    (account) => 
                        <MenuItem key={account.id} value={account.id}>
                            {account.name} (${account.balance})
                        </MenuItem>
                )}
            </Select>
        </FormControl>
    </Grid>
  )
}

export default formControoler