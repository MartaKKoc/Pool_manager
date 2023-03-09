import {useState} from 'react';
// import { InputText } from 'primereact/inputtext';
// import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
// import { Toast } from 'primereact/toast';
import {supabase} from "../services/supabase.js";


const SignUp = () => {

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
            })
        alert('Check you email for veryfication link')
        } catch (error) {
            alert(error)
        }
}



    return (
        <div className='signup-container'>
            <div className='signup-container-water'>
                <div className='signup-container-form'>
                    <h1><i className="pi pi-user"></i>SignUp</h1>
                    <form className='signup-form' onSubmit={handleSubmit}>
                        <input
                        placeholder="Name"
                        name="name"
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

                        <Button label="SignUp" severity="info" outlined />
                        <Button label="Already have an account?" severity="info" text />
                    </form>
                </div>
            </div>

        </div>
    )
}

export { SignUp };