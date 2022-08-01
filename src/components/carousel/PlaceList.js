import React, { useEffect } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import CityCard from '../cards/CityCard';

const PlaceList = (props) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div className="destination-area">
                <div className="container-bg">
                    <div className="container">
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Item One" value="1" />
                                    <Tab label="Item Two" value="2" />
                                    <Tab label="Item Three" value="3" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">Item One</TabPanel>
                            <TabPanel value="2">Item Two</TabPanel>
                            <TabPanel value="3">Item Three</TabPanel>
                        </TabContext>
                        <div className="row justify-content-center">
                            {props.cities.map(city => {
                                return (
                                    <CityCard city={city} />
                                )
                            })}
                            <div className="col-12">
                                <div className="btn-wrapper text-center">
                                    <a className="btn btn-yellow mt-4" href="#">
                                        <span>
                                            Load More
                                            <i className="la la-arrow-right" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceList;