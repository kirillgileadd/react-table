import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import {Avatar, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";


const UserItem: FC<IUser> = ({username, address, name, email}) => {
    return (
        <ListItem alignItems="center">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
            </ListItemAvatar>
            <ListItemText
                primary={name + username}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="body1"
                            color="text.primary"
                        >
                            {email}
                        </Typography>
                        <Typography variant="body2">
                            {address.city}
                            {address.street}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    );
};

export default UserItem;