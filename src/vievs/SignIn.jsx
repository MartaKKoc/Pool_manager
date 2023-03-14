import {useState} from 'react';
import { Button } from 'primereact/button';

import {supabase} from "../services/supabase.js";

// tosty
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from "react-router-dom";


const SignIn = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
       email:'', password:''
    })

    console.log(formData)
    function handleChange(event) {
        setFormData((prevFormData)=>{
            return {
                ...prevFormData,
                [event.target.name]:event.target.value
            }
        })
    }
    async function handleSubmit(e){
        e.preventDefault()


        try {
            let { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password
            })
            console.log(data,error);
            if (error) {
                toast.error(error.message)
            }
            if (data.user) {
                localStorage.setItem('userData', JSON.stringify(data.user));
                navigate('/');
            }
        } catch (error) {
            alert(toast.error)
        }
    }
    const handleNavSignUp = () => {
        navigate('/SignUp')
    }

    const notifySuccess = () => {
        toast.success('Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const notifyError = () => {
        toast.error('It is not that easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }


    return (
        <div className='signin-container'>
            <div className='signin-container-water'>
                <div className='signin-container-form'>
                    <h1><i className="pi pi-user"></i>SignIn</h1>
                    <form className='signin-form' onSubmit={handleSubmit}>

                        <input
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                        />

                        <input
                            placeholder="Password"
                            name="password"
                            type="password"
                            onChange={handleChange}
                        />

                        <Button label="SignIn" type={"submit"} severity="info" outlined onClick={notifyError} />
                        <span className="annotation">You don't have an account? </span>
                        <Button label="SignUp!" severity="info" text onClick={handleNavSignUp} />
                        <ToastContainer className="tost"/>
                    </form>
                </div>
            </div>

        </div>
    )
}

export { SignIn };
