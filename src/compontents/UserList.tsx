import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import UserItem from "./UserItem";
import {List} from "@mui/material";

interface UserListProps {
    users: IUser[]
}

const UserList:FC<UserListProps> = ({users}) => {
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {users.map(user =>
                <UserItem key={user.id} {...user}/>
            )}
        </List>
    );
};

export default UserList;