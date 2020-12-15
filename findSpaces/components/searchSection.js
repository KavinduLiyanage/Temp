/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventNoteIcon from '@material-ui/icons/EventNote';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ApartmentIcon from '@material-ui/icons/Apartment';
import { PrimaryButton } from '../../../components/common/buttons';
import RangeSlider from './rangeSlider';
import BasicDateRangePicker from './dateRangePicker';
import SimpleSelecter from './selecter';

const SearchSection = () => {
    const [title, setTitle] = useState('');

    const handleTitleChange = event => {
        setTitle(event.target.value);
    };

    const formik = useFormik({
        initialValues: {
            term: '',
            when: title,
        },
        enableReinitialize: true,
        validationSchema: Yup.object({}),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="search-form">
            <Card className="searchContainer">
                <CardContent>
                    <h6>Search</h6>
                    <hr className="devider" />
                    <List className="searchList">
                        <ListItem button className="listItem">
                            <ListItemAvatar>
                                <LocationOnIcon className="Icon" />
                            </ListItemAvatar>
                            <ListItemText primary="Where" secondary="Manhattan, NYC" />
                        </ListItem>
                        <ListItem className="listItem">
                            <ListItemAvatar>
                                <EventNoteIcon className="Icon" />
                            </ListItemAvatar>
                            <BasicDateRangePicker
                                onTitleChange={handleTitleChange}
                                title={title}
                                id="when"
                                name="when"
                                value={formik.values.when}
                                inputError={formik.touched.when && formik.errors.when}
                                formClass="register-form__item"
                            />
                        </ListItem>
                        <ListItem className="listItem">
                            <ListItemAvatar>
                                <EventAvailableIcon className="Icon" />
                            </ListItemAvatar>
                            <ListItemText primary="Duration" secondary="3 months" />
                        </ListItem>
                        <ListItem className="listItem">
                            <ListItemAvatar>
                                <ApartmentIcon className="Icon" />
                            </ListItemAvatar>
                            <SimpleSelecter
                                id="term"
                                name="term"
                                onChange={formik.handleChange}
                                value={formik.values.term}
                                inputError={formik.touched.term && formik.errors.term}
                                formClass="register-form__item"
                            />
                        </ListItem>
                    </List>
                    <List className="advanceSearchList">
                        <ListItem className="listItem">
                            <RangeSlider className="priceRange" />
                        </ListItem>
                    </List>
                    <div className="bottom">
                        <h6>Clear all</h6>
                        <div className="searchButtonDiv">
                            <PrimaryButton type="submit" className="searchButton">
                                Search
                            </PrimaryButton>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </form>
    );
};

export default SearchSection;
