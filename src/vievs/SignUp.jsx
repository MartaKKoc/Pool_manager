import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

import water_background from '../assets/tlo-tekstury-wody-slodkiej-przezroczysty-plyn.jpg'
const SignUp = () => {
    return (
        <div className='signup-section'>
            <div className='signup-box'>
                <h1><i className="pi pi-user" style={{ fontSize: '2.5rem' }}>SignUp</i></h1>
            </div>
        </div>
    )
}

export { SignUp };