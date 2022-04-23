import React, {FC} from 'react';
import {Box, CircularProgress} from "@mui/material";

const Loader:FC = () => {
    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            sx={{height: '100%'}}
        >
            <CircularProgress/>
        </Box>
    );
};

export default Loader;