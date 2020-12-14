import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FormHelperText } from '@material-ui/core';

export const SimpleSelecter = ({term,onChange,formClass,inputError, name, ...props}) => {
    return (
        <div className="selecter">
            <FormControl  className={`formInput ${formClass}`} error={!!inputError}>
                <InputLabel id="demo-simple-select-outlined-label">What</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={term}
                    onChange={onChange}
                    label="What"
                    name={name}
                    {...props}
                >
                    <MenuItem value={'Small Office'}>Small Office</MenuItem>
                    <MenuItem value={'Large Office'}>Large Office</MenuItem>
                    <MenuItem value={'Small House'}>Small House</MenuItem>
                </Select>
                <FormHelperText className="defaultHellperTxt">{inputError || ''}</FormHelperText>
            </FormControl>
        </div>
    );
};
