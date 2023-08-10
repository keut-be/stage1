import Home from "../components/Home";
import Login from "../registre/Login";
import { Account } from '../registre/Account';
import { Private } from "../registre/Private";


export const nav = [
    {path: '/',             name:'Home',            element: <Home />,                 isMenu: true,                isPrivate: false},
    {path: '/login',        name:'Login',           element: <Login />,                isMenu: false,               isPrivate: false},
    {path: '/account',      name:'Account',         element: <Account />,              isMenu: true,                isPrivate: true},
    {path: '/private',      name:'Private',         element: <Private />,              isMenu: true,                isPrivate: true}
]

export default nav;