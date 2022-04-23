import React, {FC, useCallback, useEffect} from 'react';
import {Box, Typography} from "@mui/material";
import TodoTable from "../compontents/TodoTable";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useActions} from "../hooks/useAction";
import Loader from "../compontents/Loader";
import TodoPagination from "../compontents/TodoPagination";

const TodoPage: FC = () => {
    const {limit, page, todos, totalCount, loading} = useTypeSelector(state => state.todo)
    const {fetchTodos, setCurrentPage} = useActions()

    const pagesCount = useCallback(() => {
        return Math.ceil(totalCount / limit)
    },[totalCount, limit])

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    const handleChangeCurrentPage = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    return (
        <Box>
            <Typography variant={'h4'} sx={{mb: 2}}>
                Todo таблица
            </Typography>
            <Box
                sx={{minHeight: '481px'}}
                display='flex'
                justifyContent='center'
            >
                {
                    loading ? <Loader/> : <TodoTable todos={todos}/>
                }
            </Box>
            <TodoPagination
                count={pagesCount()}
                page={page}
                handleChange={handleChangeCurrentPage}
            />
        </Box>
    );
};

export default TodoPage;