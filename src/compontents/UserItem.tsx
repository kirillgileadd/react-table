import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {StyledLink} from "./UI/StyledLink";


const UserItem: FC<IUser> = ({username, address, id, name, email}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random/140%C3%97300/?user"
                alt="user avatar"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {username}
                </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <StyledLink to={`/users/${id}`}>
                    <Button size="small">Learn More</Button>
                </StyledLink>
            </CardActions>
        </Card>
    );
};

export default UserItem;