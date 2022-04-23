import UserPage from "../pages/UserPage";
import UserDetails from "../pages/UserDetails";
import FAQPage from "../pages/FAQPage";
import TodoPage from "../pages/TodoPage";

export interface IRoute {
    path: string;
    element: JSX.Element
}

export enum RouteName {
    USERS = '/users',
    USER_DETAILS_PAGE = '/users',
    POSTS = '/posts',
    FAQ = '/faq'
}

export const publicRoutes: IRoute[] = [
    {path: RouteName.USERS, element: <UserPage/>},
    {path: RouteName.USER_DETAILS_PAGE + '/:id', element: <UserDetails/>},
    {path: RouteName.POSTS, element: <TodoPage/>},
    {path: RouteName.FAQ, element: <FAQPage/>},
]