import React, {useState, useEffect, useRef,} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "primereact/menu";
import {supabase} from "../services/supabase.js";
import {toast} from "react-toastify";
import {Avatar} from "primereact/avatar";

const Header = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const menu = useRef(null);
    const menuItems = [
        {
            label: "LogOut",
            icon: 'pi pi-sign-in',
            command: (e) => {
                handleLogOut();
            }
        }
    ]

    const handleLogOut = async() => {
        let { error } = await supabase.auth.signOut()
        if (error) {
            toast.error(error.message)
            return;
        }
        localStorage.removeItem('userData');
        navigate('SignIn');
    }

    const [isUserLogged, setIsUserLogged] = useState(null);
    const [userSession, setUserSession] = useState(null);



    const getUserSession = async (pathname) => {
        const {data, error} = await supabase.auth.getSession();

        if (data.session) {
            setIsUserLogged(true);
            setUserSession(data.session);
            return;
        }
        if (pathname !== 'SignIn' || pathname !== 'SignUp') {
            navigate('SignIn')
        }
    }

    useEffect(() => {
        setIsUserLogged(!!localStorage.getItem('userData'));
        },[]);

    useEffect(() => {
        if (!isUserLogged) {
            navigate('/SignIn')
        }
    }, [isUserLogged])


    return (
        <div className="header">
            <h1>POOL Manager</h1>
            <div className="user-profile">
                <Avatar onClick={(e) => menu.current.toggle(e)} label="P" size="xlarge" />
                <Menu model={menuItems} popup ref={menu} />
            </div>
        </div>
    )
}
export { Header };