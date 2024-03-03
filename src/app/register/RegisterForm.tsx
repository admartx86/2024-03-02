'use client';

import { useState, useEffect, FormEvent, ChangeEvent } from 'react';

type FormState = {
    username: string;
    password: string;
    confirmPassword: string;
};

type ErrorState = {
    usernameError: boolean;
    passwordError: boolean;
    confirmPasswordError: boolean;
};

export default function RegisterForm() {
    
    const [form, setForm] = useState<FormState>({
        username: '',
        password: '',
        confirmPassword: '',
    })

    const [errors, setErrors] = useState<ErrorState>({
        usernameError: true,
        passwordError: true,
        confirmPasswordError: true,
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
            username: '',
            password: '',
            confirmPassword: '',
        });
        setErrors({
            usernameError: true,
            passwordError: true,
            confirmPasswordError: true,
        });
        alert(form.username + ' ' + form.password);
    };

    useEffect(() => {
        const newErrors = {
            usernameError: form.username === '',
            passwordError: form.password === '',
            confirmPasswordError: form.confirmPassword !== form.password || form.confirmPassword === '',
        };
        setErrors(newErrors);
    }, [form]);
    

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username</label>
                <input className='border-black border-2' id='username' type='text' value={form.username} onChange={handleChange}></input>
                {errors.usernameError === true ?
                    <div>
                        <span className='text-gray-500'>Make a username.</span>
                    </div>
                :
                    <div> 
                        <span>Make a username. </span><span className='text-green-500'>✔️</span>
                    </div>
                }  
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input className='border-black border-2' id='password' type='password' value={form.password} onChange={handleChange}></input>
                {errors.passwordError === true ?
                    <div>
                        <span className='text-gray-500'>Make a password.</span>
                    </div>
                :
                    <div> 
                        <span>Make a password. </span><span className='text-green-500'>✔️</span>
                    </div>
                }  
            </div>
            <div>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input className='border-black border-2' id='confirmPassword' type='password' value={form.confirmPassword} onChange={handleChange}></input>
                {errors.confirmPasswordError === true ?
                    <div>
                        <span className='text-gray-500'>Confirm your password.</span>
                    </div>
                :
                    <div> 
                        <span>Confirm your password. </span><span className='text-green-500'>✔️</span>
                    </div>
                }  
            </div>
            {errors.usernameError === true || errors.passwordError === true || errors.confirmPasswordError === true ?
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