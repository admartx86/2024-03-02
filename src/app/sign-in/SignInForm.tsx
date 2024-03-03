'use client'

import { useState, useEffect, FormEvent, ChangeEvent } from 'react';

type FormState = {
    username: string;
    password: string;
}

type ErrorState = {
    usernameError: boolean;
    passwordError: boolean;
};

export default function SignInForm() {
    
    const [form, setForm] = useState<FormState>({
        username: '',
        password: '',
    })

    const [errors, setErrors] = useState<ErrorState>({
        usernameError: true,
        passwordError: true,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(form.username + ' ' + form.password);
        setForm({
            username: '',
            password: '',
        });
        setErrors({
            usernameError: true,
            passwordError: true,
        });
    };

    useEffect(() => {
        const newErrors = {
            usernameError: form.username === '',
            passwordError: form.password === '',
        };
        setErrors(newErrors);
    }, [form]);

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='signInUsername'>Username</label>
                <input className='border-black border-2' id='username' type='text' value={form.username} onChange={handleChange}></input>
                {errors.usernameError === true ?
                    <div>
                        <span className='text-gray-500'>Enter your username.</span>
                    </div>
                :
                    <div> 
                        <span>Enter your username. </span><span className='text-green-500'>✔️</span>
                    </div>
                }   
            </div>
            <div>
                <label htmlFor='signInPassword'>Password</label>
                <input className='border-black border-2' id='password' type='password' value={form.password} onChange={handleChange}></input>
                {errors.passwordError === true ?
                    <div>
                        <span className='text-gray-500'>Enter your password.</span>
                    </div>
                : 
                    <div>
                        <span>Enter your password. </span><span className='text-green-500'>✔️</span>
                    </div>
                }
            </div>
            {errors.usernameError === true || errors.passwordError === true ?
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