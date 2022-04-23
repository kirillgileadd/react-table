import React from 'react';
import NavBar from "./compontents/NavBar";
import AppRouter from "./compontents/AppRouter";
import {Container} from "@mui/material";

function App() {
    return (
        <div>
            <NavBar/>
            <Container sx={{p: 2}}>
                <AppRouter/>
            </Container>
        </div>
    );
}

export default App;
