'use client'

import { useState, useEffect, FormEvent, ChangeEvent } from 'react';

type FormState = {
    signInUsername: string;
    signInPassword: string;
}

type ErrorState = {
    usernameRequired: boolean;
    passwordRequired: boolean;
};

export default function SignInForm() {
    
    const [form, setForm] = useState<FormState>({
        signInUsername: '',
        signInPassword: '',
    })

    const [errors, setErrors] = useState<ErrorState>({
        usernameRequired: true,
        passwordRequired: true,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(form.signInUsername + ' ' + form.signInPassword);
        setForm({
            signInUsername: '',
            signInPassword: '',
        });
        setErrors({
            usernameRequired: true,
            passwordRequired: true,
        });
    };

    useEffect( () => {
        if (form.signInUsername.trim() === '') {
            setErrors({
                ...errors,
                usernameRequired: true,
            });
        } else {
            setErrors({
                ...errors,
                usernameRequired: false,
            });
        }; 
    }, [form.signInUsername]);

    useEffect( () => {
        if (form.signInPassword.trim() === '') {
            setErrors({
                ...errors,
                passwordRequired: true,
            });
        } else {
            setErrors({
                ...errors,
                passwordRequired: false,
            });
        }; 
    }, [form.signInPassword]);

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='signInUsername'>Username</label>
                <input className='border-black border-2' id='signInUsername' type='text' value={form.signInUsername} onChange={handleChange}></input>
                {errors.usernameRequired === true ?
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
                <label htmlFor='signInPassword'>Password</label>
                <input className='border-black border-2' id='signInPassword' type='password' value={form.signInPassword} onChange={handleChange}></input>
                {errors.passwordRequired === true ?
                    <div>
                        <span className='text-gray-500'>A password is required. Please enter your password.</span>
                    </div>
                : 
                    <div>
                        <span>A password is required. Please enter your password. </span>
                    </div>
                }
            </div>
            {errors.usernameRequired === true || errors.passwordRequired === true ?
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