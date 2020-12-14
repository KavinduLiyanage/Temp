import React from 'react';

import { DateRangePicker } from 'materialui-daterange-picker';
import { TextField } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';

export const BasicDateRangePicker = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
        setOpen2(true);
        console.log("handleClick");
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen2(false);
        console.log("handleClose");
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const [open2, setOpen2] = React.useState(true);
    const [dateRange, setDateRange] = React.useState('When');

    const toggle = () => {
        setAnchorEl(null);
        setOpen2(false);
        console.log("toggle");
    };

    const afterSelect = (range) => {
        setAnchorEl(null);
        setOpen2(false);
        console.log("afterSelect");
        console.log(((range.endDate-range.startDate)/86400000)+' days');
        setDateRange(((range.endDate-range.startDate)/86400000)+' days');
    };

    return (
        <div>
            <TextField onClick={handleClick} id="standard-basic" value={dateRange} defaultValue="Hello World" />
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
                <DateRangePicker open={open2} toggle={toggle} onChange={range => afterSelect(range)} />
            </Popover>
        </div>
    );
};
