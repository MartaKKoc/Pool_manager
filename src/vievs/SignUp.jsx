import {useState} from 'react';
import { Button } from 'primereact/button';

import {supabase} from "../services/supabase.js";

// tosty
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from "react-router-dom";


const SignUp = () => {
const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name:'', email:'', password:''
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
            const { data, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        full_name: formData.name,
                    }
                }
            })
            console.log(data,error);
            if (error) {
                toast.error(error.message)
            }
            if (data.user) {
                toast.success("Success")
                navigate('/');
            }
        } catch (error) {
            alert(error)
        }
    }

    const handleAccount = () => {
        navigate('/SignIn')
    }

const notify = () => {
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
        <div className='signup-container'>
            <div className='signup-container-water'>
                <div className='signup-container-form'>
                    <h1><i className="pi pi-user"></i>SignUp</h1>
                    <form className='signup-form' onSubmit={handleSubmit}>
                        <input
                            placeholder="Fullname"
                            name="fullname"
                            onChange={handleChange}
                        />

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

                        <Button label="SignUp" type={"submit"} severity="info" outlined />
                        <Button label="Already have an account?" severity="info" text onClick={handleAccount} />
                        <ToastContainer className="tost"/>
                    </form>
                </div>
            </div>

        </div>
    )
}

export { SignUp };

