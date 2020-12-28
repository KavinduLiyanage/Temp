/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Card from '@material-ui/core/Card';
import { TextField } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventNoteIcon from '@material-ui/icons/EventNote';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ApartmentIcon from '@material-ui/icons/Apartment';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// components
import { PrimaryButton } from '../../../components/common/buttons';
import RangeSlider from './rangeSlider';
import Util from '../../../helpers/util';
import { BasicDateRangePicker, DropdownSelecter, LocationSearchInput } from '../../../components/common/searchHelper';

const SearchSection = () => {
    const params = useParams();
    var res = params.search.split('&');
    console.log(res);

    const history = useHistory();
    const [dateDif, setDateDif] = useState('');

    const formik = useFormik({
        initialValues: {
            where: '',
            when: '',
            what: '',
        },
        validationSchema: Yup.object({}),
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            history.push(
                '/spaces/what=' +
                    values.what +
                    '&lat=' +
                    values.where.lat +
                    '&lng=' +
                    values.where.lng +
                    '&startDate=' +
                    values.when.startDate +
                    '&endDate=' +
                    values.when.endDate,
            );
        },
    });

    const getDuration = event => {
        formik.handleChange(event);

        setDateDif(Util.getDateRangeDuration(event.target.value));
    };

    const clearAll = () => {
        formik.resetForm();
        setDateDif('');
    };

    return (
        <form onSubmit={formik.handleSubmit} className="search-form">
            <Card className="searchContainer">
                <CardContent>
                    <h6>Search</h6>
                    <hr className="devider" />
                    <List className="searchList">
                        <ListItem className="listItem">
                            <ListItemAvatar>
                                <LocationOnIcon className="Icon" />
                            </ListItemAvatar>
                            <LocationSearchInput
                                id="where"
                                name="where"
                                onChange={formik.handleChange}
                                value={formik.values.where}
                                inputError={formik.touched.where && formik.errors.where}
                                formClass="register-form__item"
                            />
                        </ListItem>
                        <ListItem className="listItem">
                            <ListItemAvatar>
                                <EventNoteIcon className="Icon" />
                            </ListItemAvatar>
                            <BasicDateRangePicker
                                id="when"
                                name="when"
                                onChange={event => getDuration(event)}
                                value={formik.values.when}
                                inputError={formik.touched.when && formik.errors.when}
                                formClass="register-form__item"
                            />
                        </ListItem>
                        <ListItem className="listItem">
                            <ListItemAvatar>
                                <EventAvailableIcon className="Icon" />
                            </ListItemAvatar>
                            <TextField disabled id="duration" label="Duration" value={dateDif} InputProps={{ disableUnderline: true }} />
                        </ListItem>
                        <ListItem className="listItem">
                            <ListItemAvatar>
                                <ApartmentIcon className="Icon" />
                            </ListItemAvatar>
                            <DropdownSelecter
                                id="what"
                                name="what"
                                onChange={formik.handleChange}
                                value={formik.values.what}
                                inputError={formik.touched.what && formik.errors.what}
                                formClass="register-form__item"
                            />
                        </ListItem>
                    </List>
                    <h6>Advanced features</h6>
                    <hr className="devider" />
                    <List className="advanceSearchList">
                        <ListItem className="listItem">
                            <RangeSlider className="priceRange" />
                        </ListItem>
                    </List>
                    <div className="bottom">
                        <h6 type="button" onClick={() => clearAll()}>
                            Clear all
                        </h6>
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
