/* eslint-disable react/jsx-indent-props */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import WifiIcon from '@material-ui/icons/Wifi';
import ApartmentIcon from '@material-ui/icons/Apartment';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import { Divider } from '@material-ui/core';
import { PrimaryButton } from '../../../components/common/buttons';

const InfoWindowCard = ({ title, price, period, mainRating, votes, dealRating }) => (
    <div className="main">
        <Card className="infoWindowCard">
            <div className="details">
                <CardContent className="content">
                    <div className="top">
                        <h6 className="price" component="h6" variant="h6">
                            {price}$
                        </h6>
                        <h6 className="period" component="h6" variant="h6">
                            {period}
                        </h6>
                        <h6 className="mainRating" component="h6" variant="h6">
                            {mainRating}
                        </h6>
                        <h6 className="votes" component="h6" variant="h6">
                            {votes} votes
                        </h6>
                    </div>
                    <Divider />
                    <h6 className="title" component="h6" variant="h6">
                        {title}
                    </h6>
                    <h6 className="mainFeatures" variant="subtitle1" color="textSecondary">
                        Main features
                    </h6>
                    <div className="controls">
                        <WifiIcon className="icon" />

                        <FastfoodIcon className="icon" />

                        <ApartmentIcon className="icon" />

                        <LocalParkingIcon className="icon" />
                    </div>
                    <h6 className="mainFeatures" variant="subtitle1" color="textSecondary">
                        Overall deal rating
                    </h6>
                    <h6>
                        <div className="dealRating">{dealRating}</div>
                    </h6>
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
