import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {FC} from "react";
import {ITodo} from "../models/ITodo";


interface TodoTableProps {
    todos: ITodo[]
}

const TodoTable: FC<TodoTableProps> = ({todos}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 550}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left">Название</TableCell>
                        <TableCell align="right">Статус</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todos.map((todo) => (
                        <TableRow
                            key={todo.id}
                        >
                            <TableCell component="th" scope="todo">
                                {todo.id}
                            </TableCell>
                            <TableCell align="left">{todo.title}</TableCell>
                            <TableCell align="right">{todo.completed ? 'Да' : 'Нет'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default TodoTable

