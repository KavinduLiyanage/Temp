/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import RoomOutlined from '@material-ui/icons/RoomOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import Search from '@material-ui/icons/Search';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

// components
import { PrimaryButton } from '../../../components/common/buttons';
import util from '../../../helpers/util';
import { DropdownSelecter, BasicDateRangePicker, LocationSearchInput } from '../../../components/common/searchHelper';

const SearchBar = () => {
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
                '/spaces/' + values.what + '&' + values.where.lat + '&' + values.where.lng + '&' + values.when.startDate + '&' + values.when.endDate,
            );
        },
    });

    const getDuration = event => {
        formik.handleChange(event);

        setDateDif(util.getDateRangeDuration(event.target.value));
    };

    return (
        <div className="search_bar">
            <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'row' }}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <RoomOutlined fontSize="small" />
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

                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <DateRangeOutlinedIcon fontSize="small" />
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

                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <EventAvailableOutlinedIcon fontSize="small" />
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

                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <BusinessOutlinedIcon fontSize="small" />
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
                <PrimaryButton type="submit" startIcon={<Search fontSize="large" />}>
                    Search
                </PrimaryButton>
            </form>
        </div>
    );
};

export default SearchBar;
