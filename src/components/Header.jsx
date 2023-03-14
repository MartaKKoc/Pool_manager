import React, {useState, useEffect, useRef,} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "primereact/menu";
import {supabase} from "../services/supabase.js";
import {toast} from "react-toastify";

const Header = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const menu = useRef(null);
    const menuItems = [
        {
            label: "LogOut",
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
                <Avatar onClick
            </div>


        </div>
    )
}
export { Header };