/* eslint-disable react/jsx-indent-props */
import React from 'react';
import Slider from '@material-ui/core/Slider';

function valuetext(value) {
    return `${value}°C`;
}

const RangeSlider = () => {
    const [value, setValue] = React.useState([0, 1000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="rangeSlider">
            <h6>Price per Squre meter</h6>
            <div className="rangeValues">
                <h6 className="value1">{value[0]} USD</h6>
                <h6 className="value2">{value[1]} USD</h6>
            </div>
            <Slider max={1000} value={value} onChange={handleChange} aria-labelledby="range-slider" getAriaValueText={valuetext} />
        </div>
    );
};

export default RangeSlider;
