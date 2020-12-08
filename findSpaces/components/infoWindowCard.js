import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import WifiIcon from '@material-ui/icons/Wifi';
import ApartmentIcon from '@material-ui/icons/Apartment';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import { Box } from '@material-ui/core';

const InfoWindowCard = () => (
    <div className="infoWindow">
        <Card className="main">
            <div className="details">
                <CardContent className="content">
                    <Typography className="title" component="h6" variant="h6">
                        Small office - 3 Rooms
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
                            <div className="rating">8</div>
                        </Box>
                    </Typography>
                </CardContent>
            </div>
            <CardMedia
                className="cover"
                component="img"
                image="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg"
                title="Live from space album cover"
            />
        </Card>
    </div>
);

export default InfoWindowCard;
