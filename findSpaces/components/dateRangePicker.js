/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker } from 'materialui-daterange-picker';
import { TextField } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import { format, differenceInDays } from 'date-fns';

const BasicDateRangePicker = ({ when, formClass, inputError, name, ...props }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [dateRange, setDateRange] = React.useState('');
    const [setDateDif] = React.useState('');
    const [open2, setOpen2] = React.useState(true);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const today = new Date();

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
        setOpen2(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen2(false);
    };

    const toggle = () => {
        setAnchorEl(null);
        setOpen2(false);
    };

    const afterSelect = range => {
        setAnchorEl(null);
        setOpen2(false);
        setDateRange(`${format(range.startDate, 'MMM dd')} - ${format(range.endDate, 'MMM dd')}`);
        setDateDif(differenceInDays(range.endDate, range.startDate));
    };

    return (
        <div>
            <TextField
                label="When"
                InputProps={{ disableUnderline: true }}
                onClick={handleClick}
                id="standard-basic"
                onFocus={props.onTitleChange}
                value={dateRange}
                {...props}
            />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <DateRangePicker minDate={today.setDate(today.getDate() - 1)} open={open2} toggle={toggle} onChange={range => afterSelect(range)} />
            </Popover>
        </div>
    );
};

BasicDateRangePicker.propTypes = {
    when: PropTypes.string,
    formClass: PropTypes.string,
    inputError: PropTypes.string,
    name: PropTypes.string,
    onTitleChange: PropTypes.string,
};

BasicDateRangePicker.defaultProps = {
    when: '',
    formClass: '',
    inputError: '',
    name: '',
    onTitleChange: '',
};

export default BasicDateRangePicker;
