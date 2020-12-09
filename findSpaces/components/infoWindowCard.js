/* eslint-disable react/jsx-indent-props */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import WifiIcon from '@material-ui/icons/Wifi';
import ApartmentIcon from '@material-ui/icons/Apartment';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import { Box, Divider } from '@material-ui/core';
import { PrimaryButton } from '../../../components/common/buttons';

const InfoWindowCard = ({ title, price, period, mainRating, votes, dealRating }) => (
    <div className="main">
        <Card className="infoWindowCard">
            <div className="details">
                <CardContent className="content">
                    <div className="top">
                        <Typography className="price" component="h6" variant="h6">
                            {price}$
                        </Typography>
                        <Typography className="period" component="h6" variant="h6">
                            {period}
                        </Typography>
                        <Typography className="mainRating" component="h6" variant="h6">
                            {mainRating}
                        </Typography>
                        <Typography className="votes" component="h6" variant="h6">
                            {votes}
                        </Typography>
                    </div>
                    <Divider />
                    <Typography className="title" component="h6" variant="h6">
                        {title}
                    </Typography>
                    <Typography className="mainFeatures" variant="subtitle1" color="textSecondary">
                        Main features
                    </Typography>
                    <div className="controls">
                        <WifiIcon className="icon" />

                        <FastfoodIcon className="icon" />

                        <ApartmentIcon className="icon" />

                        <LocalParkingIcon className="icon" />
                    </div>
                    <Typography className="mainFeatures" variant="subtitle1" color="textSecondary">
                        Overall deal rating
                    </Typography>
                    <Typography>
                        <Box fontSize={18} fontWeight="fontWeightBold" m={1}>
                            <div className="dealRating">{dealRating}</div>
                        </Box>
                    </Typography>
                </CardContent>
            </div>
            <div className="right">
                <CardMedia
                    className="cover"
                    component="img"
                    image="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg"
                    title="Live from space album cover"
                />
                <PrimaryButton className="exploreButton">Explore office</PrimaryButton>
            </div>
        </Card>
    </div>
);

InfoWindowCard.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    period: PropTypes.string,
    mainRating: PropTypes.number,
    votes: PropTypes.number,
    dealRating: PropTypes.number,
};

InfoWindowCard.defaultProps = {
    title: '',
    price: 0,
    period: '',
    mainRating: 0,
    votes: 0,
    dealRating: 0,
};

export default InfoWindowCard;
