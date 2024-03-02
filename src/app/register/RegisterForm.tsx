'use client';

import { useState, useEffect, FormEvent, ChangeEvent } from 'react';

type FormState = {
    registerUsername: string;
    registerPassword: string;
    confirmRegisterPassword: string;
};

type ErrorState = {
    usernameRequiredError: boolean;
    passwordRequiredError: boolean;
    passwordsMatchError: boolean;
};

export default function RegisterForm() {
    
    const [form, setForm] = useState<FormState>({
        registerUsername: '',
        registerPassword: '',
        confirmRegisterPassword: '',
    })

    const [errors, setErrors] = useState<ErrorState>({
        usernameRequiredError: true,
        passwordRequiredError: true,
        passwordsMatchError: true,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setForm({
            registerUsername: '',
            registerPassword: '',
            confirmRegisterPassword: '',
        });
        setErrors({
            usernameRequiredError: true,
            passwordRequiredError: true,
            passwordsMatchError: true,
        });
        alert(form.registerUsername + ' ' + form.registerPassword);
    };

    useEffect(() => {
        const newErrors = {
            usernameRequiredError: form.registerUsername.trim() === '',
            passwordRequiredError: form.registerPassword.trim() === '',
            passwordsMatchError: form.confirmRegisterPassword.trim() !== form.registerPassword.trim(),
        };
        setErrors(newErrors);
    }, [form.registerUsername, form.registerPassword, form.confirmRegisterPassword]);
    

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='registerUsername'>Username</label>
                <input className='border-black border-2' id='registerUsername' type='text' value={form.registerUsername} onChange={handleChange}></input>
                {errors.usernameRequiredError === true ?
                    <div>
                        <span className='text-gray-500'>A username is required. Please enter your username.</span>
                    </div>
                :
                    <div> 
                        <span>A username is required. Please enter your username. </span>
                    </div>
                }  
            </div>
            <div>
                <label htmlFor='registerPassword'>Password</label>
                <input className='border-black border-2' id='registerPassword' type='password' value={form.registerPassword} onChange={handleChange}></input>
                {errors.passwordRequiredError === true ?
                    <div>
                        <span className='text-gray-500'>A password is required. Please enter a password.</span>
                    </div>
                :
                    <div> 
                        <span>A password is required. Please enter a password. </span>
                    </div>
                }  
            </div>
            <div>
                <label htmlFor='confirmRegisterPassword'>Confirm Password</label>
                <input className='border-black border-2' id='confirmRegisterPassword' type='password' value={form.confirmRegisterPassword} onChange={handleChange}></input>
                {errors.passwordsMatchError === true ?
                    <div>
                        <span className='text-gray-500'>Passwords must match.</span>
                    </div>
                :
                    <div> 
                        <span>Passwords must match.</span>
                    </div>
                }  
            </div>
            {errors.usernameRequiredError === true || errors.passwordRequiredError === true || errors.passwordsMatchError === true ?
                <button disabled={true} type='submit' className='border-black border-2 text-gray-500'>
                    Submit
                </button>
            :
                <button type='submit' className='border-black border-2'>
                    Submit
                </button>
            }
        </form>
    );

};