import React, {FC, useEffect} from 'react';
import {useActions} from "../hooks/useAction";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {Box, CircularProgress, Container, Typography} from "@mui/material";
import UserList from "../compontents/UserList";

const UserPage: FC = () => {
    const {fetchUsers} = useActions()
    const {users, loading} = useTypeSelector(state => state.user)
    console.log(users);

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <CircularProgress/>
    }

    return (
        <Box>
            <Typography variant='h4' sx={{mb: 2}}>Спипок пользователей</Typography>
            <UserList users={users}/>
        </Box>
    );
};

export default UserPage;