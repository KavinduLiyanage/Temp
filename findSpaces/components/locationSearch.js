/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormHelperText, TextField } from '@material-ui/core';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

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

const LocationSearchInput = ({ where, formClass, inputError, name, onChange, ...props }) => {
    const [address, setAddress] = useState('');

    const handleChange = event => {
        setAddress(event);
        onChange(mapToEvent(name, event));
    };

    const handleSelect = value => {
        setAddress(value);
        geocodeByAddress(value)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                onChange(mapToEvent(name, latLng));
            });
        // .catch(error => console.error('Error', error));
    };

    return (
        <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <FormControl className={`formInput ${formClass}`} error={!!inputError}>
                        <TextField
                            id="where"
                            label="Where"
                            name={name}
                            value={where}
                            InputProps={{ disableUnderline: true }}
                            {...getInputProps({
                                className: 'location-search-input',
                            })}
                        />
                        <FormHelperText className="defaultHellperTxt">{inputError || ''}</FormHelperText>
                    </FormControl>

                    <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                            const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                            // inline style for demonstration purpose
                            const style = suggestion.active
                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                            return (
                                <div
                                    key={suggestion.placeId}
                                    {...getSuggestionItemProps(suggestion, {
                                        className,
                                        style,
                                    })}
                                >
                                    <span>{suggestion.description}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    );
};

LocationSearchInput.propTypes = {
    where: PropTypes.string,
    formClass: PropTypes.string,
    inputError: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
};

LocationSearchInput.defaultProps = {
    where: '',
    formClass: '',
    inputError: '',
    name: '',
    onChange: '',
};

export default LocationSearchInput;
