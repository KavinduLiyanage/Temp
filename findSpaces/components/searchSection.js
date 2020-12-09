import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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
import InlineDatePickerDemo from './datePicker';

const SearchSection = () => (
    <Card className="searchContainer">
        <CardContent>
            <Typography gutterBottom variant="body2" component="p" style={{ padding: '0' }}>
                Search
            </Typography>
            <hr className="devider" />
            <InlineDatePickerDemo/>
            <List className="searchList">
                <ListItem button className="listItem">
                    <ListItemAvatar>
                        <LocationOnIcon className="Icon" />
                    </ListItemAvatar>
                    <ListItemText primary="Where" secondary="Manhattan, NYC" />
                </ListItem>
                <ListItem button className="listItem">
                    <ListItemAvatar>
                        <EventNoteIcon className="Icon" />
                    </ListItemAvatar>
                    <ListItemText primary="When" secondary="7 Sep 2020" />
                </ListItem>
                <ListItem button className="listItem">
                    <ListItemAvatar>
                        <EventAvailableIcon className="Icon" />
                    </ListItemAvatar>
                    <ListItemText primary="Duration" secondary="3 months" />
                </ListItem>
                <ListItem button className="listItem">
                    <ListItemAvatar>
                        <ApartmentIcon className="Icon" />
                    </ListItemAvatar>
                    <ListItemText primary="What" secondary="Small Office" />
                </ListItem>
            </List>
            <Typography gutterBottom variant="body2" component="p">
                Advanced Features
            </Typography>
            <hr className="devider" />
            <List className="advanceSearchList">
                <ListItem className="listItem">
                    <RangeSlider className="priceRange" />
                </ListItem>
                <ListItem button className="listItem">
                    <ListItemText primary="Kitchen" />
                </ListItem>
                <ListItem button className="listItem">
                    <ListItemText primary="Status" />
                </ListItem>
                <ListItem button className="listItem">
                    <ListItemText primary="Parking" />
                </ListItem>
                <ListItem button className="listItem">
                    <ListItemText primary="Rooms" />
                </ListItem>
                <ListItem button className="listItem">
                    <ListItemText primary="Confrence rooms" />
                </ListItem>
                <ListItem button className="listItem">
                    <ListItemText primary="AC" />
                </ListItem>
                <ListItem button className="listItem">
                    <ListItemText primary="Internet connection" />
                </ListItem>
                <ListItem button className="listItem">
                    <ListItemText primary="Floor" />
                </ListItem>
                <ListItem button className="listItem">
                    <ListItemText primary="Gym" />
                </ListItem>
            </List>
            <div className="bottom">
                <div className="searchButtonDiv">
                    <PrimaryButton className="searchButton">Search</PrimaryButton>
                </div>
            </div>
        </CardContent>
    </Card>
);

export default SearchSection;
