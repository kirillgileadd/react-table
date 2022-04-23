import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import UserItem from "./UserItem";
import {Grid, List} from "@mui/material";

interface UserListProps {
    users: IUser[]
}

const UserList: FC<UserListProps> = ({users}) => {
    return (
        <Grid container spacing={2}>
            {users.map(user =>
                <Grid xs={4} key={user.id} item>
                    <UserItem {...user}/>
                </Grid>
            )}
        </Grid>
    );
};

export default UserList;