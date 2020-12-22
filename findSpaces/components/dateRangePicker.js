/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker } from 'materialui-daterange-picker';
import { TextField } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import { format } from 'date-fns';

const mapToEvent = (name, value) => {
    return {
        persist: () => {},
        target: {
            type: 'change',
            id: name,
            name,
            value,
        },
    };
};

const BasicDateRangePicker = ({ when, formClass, inputError, name, onChange, ...props }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [dateRange, setDateRange] = useState('');
    const [popOverOpen, setPopOverOpen] = useState(true);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const today = new Date();

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
        setPopOverOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setPopOverOpen(false);
    };

    const toggle = () => {
        setAnchorEl(null);
        setPopOverOpen(false);
    };

    const afterSelect = range => {
        setAnchorEl(null);
        setPopOverOpen(false);

        const dateTarget = range;
        setDateRange(`${format(range.startDate, 'MMM dd')} - ${format(range.endDate, 'MMM dd')}`);

        onChange(mapToEvent(name, dateTarget));
    };

    return (
        <div className="dateRangePicker">
            <TextField disabled label="When" InputProps={{ disableUnderline: true }} onClick={handleClick} id="standard-basic" value={dateRange} />
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
                <DateRangePicker
                    minDate={today.setDate(today.getDate() - 1)}
                    open={popOverOpen}
                    toggle={toggle}
                    onChange={range => afterSelect(range)}
                />
            </Popover>
        </div>
    );
};

BasicDateRangePicker.propTypes = {
    when: PropTypes.string,
    formClass: PropTypes.string,
    inputError: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
};

BasicDateRangePicker.defaultProps = {
    when: '',
    formClass: '',
    inputError: '',
    name: '',
    onChange: '',
};

export default BasicDateRangePicker;
