import React, {FC} from 'react';
import {Pagination} from "@mui/material";

interface TodoPaginationProps {
    handleChange: (e: React.ChangeEvent<unknown>, value: number) => void,
    count: number,
    page: number
}

const TodoPagination: FC<TodoPaginationProps> = ({page, count, handleChange}) => {
    return (
        <Pagination
            color='primary'
            sx={{mt: 2, display: 'flex', justifyContent: 'center'}}
            count={count} page={page}
            onChange={handleChange}
        />
    );
};

export default TodoPagination;