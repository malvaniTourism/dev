import React, { useEffect } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useNavigate } from 'react-router-dom';

import CityCard from '../cards/CityCard';
import CityCard1 from '../cards/CityCard1';
import "../../assets/styles/CityCard1.scss"

const PlaceList = ({ places }) => {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getDetails = (id) => {
        navigate('/place/details', { state: { name: 'Place', id } });
    }

    return (
        <div>
            <div className="destination-area">
                <div className="container-bg">
                    <div className="container">
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    {places.map((place, index) => {
                                        return (
                                            <Tab label={place.name} value={index} />
                                        )
                                    })}
                                </TabList>
                            </Box>
                            {places.map((place, index) => {
                                return (
                                    <TabPanel value={index} className="row justify-content-center">
                                        {place.places.map(place => {
                                            return (
                                                <CityCard1 city={place} onClick={(id) => getDetails(id)} />
                                            )
                                        })}
                                    </TabPanel>
                                )
                            })}
                        </TabContext>
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
    )
}

export default PlaceList;