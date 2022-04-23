import React, {FC, useEffect} from 'react';
import {Box, Typography} from "@mui/material";
import TodoTable from "../compontents/TodoTable";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useActions} from "../hooks/useAction";
import Loader from "../compontents/Loader";

const TodoPage: FC = () => {
    const {limit, page, todos, totalCount, loading} = useTypeSelector(state => state.todo)
    const {fetchTodos} = useActions()
    console.log(todos);
    console.log(totalCount);

    useEffect(() => {
        fetchTodos(page, limit)
    }, [])

    if(loading) {
        return <Loader/>
    }

    return (
        <Box>
            <Typography variant={'h4'} sx={{mb: 2}}>
                Todo таблица
            </Typography>
            <TodoTable/>
        </Box>
    );
};

export default TodoPage;