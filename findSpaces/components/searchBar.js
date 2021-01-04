/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Search from '@material-ui/icons/Search';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
// components
import { PrimaryButton } from '../../../components/common/buttons';
import util from '../../../helpers/util';
import { DropdownSelecter, BasicDateRangePicker, LocationSearchInput } from '../../../components/common/searchHelper';

// assets
import { IconMappointerLg, IconDate, IconOffice, IconEvent } from '../../../constants/images';

const queryString = require('query-string');

const SearchBar = () => {
    const history = useHistory();
    const [dateDif, setDateDif] = useState('');
    const [formatedDateRange, setFormatedDateRange] = useState('');

    const formik = useFormik({
        initialValues: {
            where: '',
            when: '',
            what: '',
        },
        validationSchema: Yup.object().shape({
            where: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            const obj = {
                address: values.where.address,
                what: values.what,
                lat: values.where.lat,
                lng: values.where.lng,
                startDate: values.when.startDate,
                endDate: values.when.endDate,
                dateDif,
                formatedDateRange,
            };
            const stringified = queryString.stringify(obj);

            history.push(`/spaces/${stringified}`);
        },
    });

    const getDuration = event => {
        formik.handleChange(event);
        setDateDif(util.getDateRangeDuration(event.target.value));
        setFormatedDateRange(`${format(event.target.value.startDate, 'MMM dd')} - ${format(event.target.value.endDate, 'MMM dd')}`);
    };

    return (
        <div className="search_container">
            <form className="search_bar" onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'row' }}>
                <Grid container className="field_items" spacing={1} alignItems="flex-end">
                    <Grid item>
                        <img src={IconMappointerLg} className="icons" alt="Start-up" />
                    </Grid>
                    <Grid item>
                        <LocationSearchInput
                            id="where"
                            name="where"
                            onChange={formik.handleChange}
                            value={formik.values.where}
                            inputError={formik.touched.where && formik.errors.where}
                            formClass="register-form__item"
                        />
                    </Grid>
                </Grid>

                <Grid container className="field_items" spacing={1} alignItems="flex-end">
                    <Grid item>
                        <img src={IconDate} className="icons" alt="Start-up" />
                    </Grid>
                    <Grid item>
                        <BasicDateRangePicker
                            id="when"
                            name="when"
                            onChange={event => getDuration(event)}
                            value={formik.values.when}
                            inputError={formik.touched.when && formik.errors.when}
                            formClass="register-form__item"
                        />
                    </Grid>
                </Grid>

                <Grid container className="field_items" spacing={1} alignItems="flex-end">
                    <Grid item>
                        <img src={IconEvent} className="icons" alt="Start-up" />
                    </Grid>
                    <Grid item>
                        <TextField
                            disabled
                            id="input-with-icon-grid-duration"
                            label="Duration"
                            value={dateDif}
                            InputProps={{ disableUnderline: true }}
                        />
                    </Grid>
                </Grid>

                <Grid container className="field_items" spacing={1} alignItems="flex-end">
                    <Grid item>
                        <img src={IconOffice} className="icons" alt="Start-up" />
                    </Grid>
                    <Grid item>
                        <DropdownSelecter
                            id="what"
                            name="what"
                            onChange={formik.handleChange}
                            value={formik.values.what}
                            inputError={formik.touched.what && formik.errors.what}
                            formClass="register-form__item"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="flex-end">
                    <PrimaryButton type="submit" startIcon={<Search fontSize="large" />}>
                        Search
                    </PrimaryButton>
                </Grid>
            </form>
        </div>
    );
};

export default SearchBar;
