import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { display, flexbox, margin, width } from '@mui/system';
import Path from "../../services/baseUrl";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import CommentBankOutlinedIcon from '@mui/icons-material/CommentBankOutlined';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import "../../assets/styles/CityCard1.scss"

const ExpandMore = styled((props) => {

    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CityCard1(props) {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    let imgUrl = Path.API_PATH + props.city.bg_image_url;

    return (
        <div className='col-lg-4 col-md-6' >
            <Card className='card-container'>
                <CardMedia
                    className='cardcontainer-img'
                    sx={{ height: 200, borderRadius: 5, }}
                    component="img"
                    height="194"
                    image={imgUrl}
                    alt="Paella dish" />
                <div className='top-left'>lable</div>
                <div className='top-right'>
                    <IconButton aria-label="add to favorites" className='add-favorites-icon'sx={{ color: 'red' }}>
                        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
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
                                <Checkbox sx={{padding:0.4}} {...label} icon={<ThumbUpIcon />} checkedIcon={<ThumbUpIcon />} 
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







