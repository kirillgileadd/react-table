import React, {FC} from 'react';
import {Routes, Route} from "react-router-dom";
import {publicRoutes} from "../routes";

const AppRouter:FC = () => {
    return (
        <Routes>
            {publicRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}
        </Routes>
    );
};

export default AppRouter;