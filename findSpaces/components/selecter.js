/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FormHelperText } from '@material-ui/core';

const SimpleSelecter = ({ term, formClass, inputError, name, ...props }) => {
    return (
        <div className="selecter">
            <FormControl className={`formInput ${formClass}`} error={!!inputError}>
                <InputLabel id="demo-simple-select-outlined-label">What</InputLabel>
                <Select
                    disableUnderline
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={term}
                    label="What"
                    name={name}
                    {...props}
                >
                    <MenuItem value="Small Office">Small Office</MenuItem>
                    <MenuItem value="Large Office">Large Office</MenuItem>
                    <MenuItem value="Small House">Small House</MenuItem>
                </Select>
                <FormHelperText className="defaultHellperTxt">{inputError || ''}</FormHelperText>
            </FormControl>
        </div>
    );
};

SimpleSelecter.propTypes = {
    term: PropTypes.string,
    formClass: PropTypes.string,
    inputError: PropTypes.string,
    name: PropTypes.string,
};

SimpleSelecter.defaultProps = {
    term: '',
    formClass: '',
    inputError: '',
    name: '',
};

export default SimpleSelecter;
