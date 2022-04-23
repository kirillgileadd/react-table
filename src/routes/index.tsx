import UserPage from "../pages/UserPage";

export interface IRoute {
    path: string;
    element: JSX.Element
}

export enum RouteName {
    USERS = '/users',
    POSTS = '/posts',
    FAQ = '/raq'
}

export const publicRoutes: IRoute[] = [
    {path: RouteName.USERS, element: <UserPage/>},
]