import UserPage from "../pages/UserPage";
import UserDetails from "../pages/UserDetails";

export interface IRoute {
    path: string;
    element: JSX.Element
}

export enum RouteName {
    USERS = '/users',
    USER_DETAILS_PAGE = '/users',
    POSTS = '/posts',
    FAQ = '/raq'
}

export const publicRoutes: IRoute[] = [
    {path: RouteName.USERS, element: <UserPage/>},
    {path: RouteName.USER_DETAILS_PAGE + '/:id', element: <UserDetails/>},
]