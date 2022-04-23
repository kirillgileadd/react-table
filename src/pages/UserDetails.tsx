import React, {FC, useEffect} from 'react';
import {Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Typography} from "@mui/material";
import {StyledLink} from "../compontents/UI/StyledLink";
import {useActions} from "../hooks/useAction";
import {useParams} from "react-router-dom";
import {useTypeSelector} from "../hooks/useTypeSelector";

const UserDetails:FC = () => {
    const {fetchCurrentUser} = useActions()
    const {user, loading} = useTypeSelector(state => state.currentUser)
    console.log(user);
    const {id} = useParams()

    useEffect(() => {
        fetchCurrentUser(Number(id))
    }, [])

    if(loading) {
        return <CircularProgress/>
    }

    return (
        <Card >
            <CardMedia
                component="img"
                height="340"
                image="https://source.unsplash.com/random/340%C3%97300/?user"
                alt="user avatar"
            />
            <CardContent sx={{display: "flex", justifyContent: 'space-between'}}>
                <Box>
                    <Typography gutterBottom variant="h5" component="div">
                        {user?.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {user?.username}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {user?.email}
                    </Typography>
                </Box>
                <Box>
                    Address:
                    <Typography color='primary.main'>
                        {user?.address?.city}
                    </Typography>
                    <Typography color='primary.main'>
                        {user?.address?.street}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default UserDetails;