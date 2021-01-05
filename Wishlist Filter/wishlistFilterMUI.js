/* eslint-disable react/jsx-indent-props */
import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@material-ui/core';
import React, { useState } from 'react';
import RangeSlider from '../../findSpaces/components/rangeSlider';
import { PrimaryButton } from '../../../components/common/buttons';

const WishlistFilterMUI = () => {
    const Conditions = [
        { _id: '5ff43f1e0888bf092b21437b', name: 'New', is_active: true },
        { _id: '5ff43f1e0888bf092b21437c', name: 'Renovated', is_active: true },
        { _id: '5ff43f1e0888bf092b21437d', name: 'Used', is_active: true },
    ];

    const Features = [
        { _id: '5ff43f1e0888bf092b21437e', name: 'Parking', is_active: true },
        { _id: '5ff43f1e0888bf092b21437f', name: 'Conference room', is_active: true },
        { _id: '5ff43f1e0888bf092b21437g', name: 'Internet connection', is_active: true },
        { _id: '5ff43f1e0888bf092b21437h', name: 'Wifi', is_active: true },
        { _id: '5ff43f1e0888bf092b21437i', name: 'AC', is_active: true },
        { _id: '5ff43f1e0888bf092b21437j', name: 'Gym', is_active: true },
    ];
    const [value, setValue] = useState([0, 1000]);
    const [condition, setCondition] = React.useState({});
    const [feature, setFeature] = React.useState({});

    const conditionHandleChange = event => {
        setCondition({ ...condition, [event.target.name]: event.target.checked });
    };

    const featuresHandleChange = event => {
        setFeature({ ...feature, [event.target.name]: event.target.checked });
    };

    const priceRangeHandleChange = (event, newValue) => {
        setValue(newValue);
    };

    const onSubmit = () => {
        console.log(condition);
        console.log(feature);
        console.log(value);
    };

    return (
        <div className="wishlist-filter">
            <RangeSlider onValueChange={priceRangeHandleChange} value={value} />
            <FormControl component="fieldset-condition">
                <h6>Condition</h6>
                <FormGroup className="condition-checkboxes" row={true}>
                    {Conditions.map(element => (
                        <FormControlLabel
                            key={element._id}
                            control={<Checkbox onChange={conditionHandleChange} name={element.name} />}
                            label={element.name}
                        />
                    ))}
                </FormGroup>
                <h6>Features</h6>
                <FormGroup className="features-checkboxes" row={true}>
                    {Features.map(element => (
                        <FormControlLabel
                            key={element._id}
                            control={<Checkbox onChange={featuresHandleChange} name={element.name} />}
                            label={element.name}
                        />
                    ))}
                </FormGroup>
            </FormControl>
            <PrimaryButton onClick={onSubmit} className="searchButton">
                Filter
            </PrimaryButton>
        </div>
    );
};

export default WishlistFilterMUI;
