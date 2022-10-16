import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img1 from '../../assets/img/tour/1.png';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "../../assets/styles/ProjectCard.scss"


const CategoriesCard = (data) => {

  return (
    <div
    className="holiday-plan-area tp-holiday-plan-area mg-top-96"
    style={{ backgroundImage: "url(assets/img/bg/8.png)" }}>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-9">
                <div className="section-title text-center">
                    {/* <h2
                        className="title wow animated fadeInUp"
                        data-wow-duration="0.
                        /9*
                        6s"
                        data-wow-delay="0.1s"
                    >
                    Categories
                    </h2> */}
                </div>
            </div>
        </div>
        <div className="categriescard">
        {data?.data?.map((item) => {
                            return (
                              <div className='categries-type'>
                              <Stack>
                                  <Avatar alt="Remy Sharp"src={img1} sx={{ minWidth: 180, minHeight: 180 }} />
                              </Stack>
                              <Stack  sx={{textAlign:"center",marginTop:2 }}>
                                  <Typography >{item?.name}</Typography>
                              </Stack>
                          </div>
                            )
                        })}
       
        </div>
    </div>
</div>
  )
}

export default CategoriesCard