import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import Path from "../../services/baseUrl";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import CommentBankOutlinedIcon from '@mui/icons-material/CommentBankOutlined';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import "../../assets/styles/CityCard1.scss"
import { pink } from '@mui/material/colors';

export default function CityCard1(props) {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    let imgUrl = Path.API_PATH + props.city.bg_image_url;

    return (
        <div className='col-lg-4 col-md-6' >
            <Card className='card-container'>
                <CardMedia
                    className='cardcontainer-img'
                    sx={{ borderRadius: 5, }}
                    component="img"
                    image={imgUrl}
                    alt="Paella dish" />
                <div class="ribbon"><span>Most Visited</span></div>
                <div className='top-right'>
                    <IconButton aria-label="add to favorites" className='add-favorites-icon' sx={{ color: 'red' }}>
                        <Checkbox {...label} sx={{ color: pink[800], '&.Mui-checked': { color: pink[600], }, }} 
                        icon={<FavoriteBorder />} checkedIcon={<Favorite />} 
                        />
                    </IconButton>
                </div>
                <CardContent>
                    <div style={{ flex: 3 }}>
                        <h3 className="title" style={{ fontWeight: 600 }}>{props.city.name}</h3>
                        <p className="content" style={{ margin: 0 }}>{props.city.tag_line}</p><br />
                        <p className="content" style={{ fontSize: 14, marginTop: -10 }}>{props.city.description}</p>
                    </div>
                </CardContent>
                <div className='bottom-left'>
                    <CardActions disableSpacing>
                        <IconButton aria-label="share">
                            <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
                                <Badge color="warning" badgeContent={10} max={999} >
                                    <Checkbox sx={{ padding: 0.4 }} {...label} icon={<ThumbUpIcon />} checkedIcon={<ThumbUpIcon />}
                                    />
                                </Badge>
                            </Stack>
                        </IconButton>
                        <IconButton aria-label="share">
                            <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
                                <Badge color="warning" badgeContent={10} max={999}>
                                    <CommentBankOutlinedIcon />
                                </Badge>
                            </Stack>
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </div>
                <div className='bottom-right'>
                    <div className="btn btn-gray mx-auto alignCenter greyBtn" style={{ flex: 1 }} onClick={() => props.onClick(props.city.id)}>
                        <span>
                            Explore
                            <i className="la la-arrow-right" />
                        </span>
                    </div>
                </div>
            </Card>
        </div>
    );
}







