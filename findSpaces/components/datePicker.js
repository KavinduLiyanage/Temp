/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const DatePicker = ({ value = '', handleDateChange = () => {}, inputAdormantPosition = 'end', className = '', placeholder = '', ...props }) => {
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
                autoOk
                variant="inline"
                inputVariant="outlined"
                format="MM/DD/YYYY"
                inputValue=""
                value={value}
                InputAdornmentProps={{ position: inputAdormantPosition }}
                onChange={handleDateChange}
                placeholder={placeholder}
                {...props}
            />
        </MuiPickersUtilsProvider>
    );
};

export default DatePicker;
