import React, {FC} from 'react';
import {AppBar, Box, Button, ButtonGroup, Toolbar, Typography} from "@mui/material";
import {StyledLink} from "./UI/StyledLink";

const NavBar: FC = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Тестовое Код Констракшн
                    </Typography>
                    <ButtonGroup
                        sx={{
                            ml: 3,
                        }}
                        color='inherit'
                        variant="text"
                    >
                        <StyledLink to='/users'>
                            <Button>Пользователи</Button>
                        </StyledLink>
                        <StyledLink to='/posts'>
                            <Button>Таблица постов</Button>
                        </StyledLink>
                        <StyledLink to='/faq'>
                            <Button>FAQ</Button>
                        </StyledLink>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;