import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Accordian from './Accordian';

const MainCard = (props) => {
    const { item } = props;
    return (
        <Card sx={{ maxWidth: 345, marginTop: 4 }} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={item.recipe.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.recipe.label}
                    </Typography>

                    <Accordian item={item} />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default MainCard;