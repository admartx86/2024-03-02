'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

type FormState = {
    registerUsername: string;
    registerPassword: string;
    confirmRegisterPassword: string;
};

export default function RegisterForm() {
    
    const [form, setForm] = useState<FormState>({
        registerUsername: '',
        registerPassword: '',
        confirmRegisterPassword: '',
    })

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
        alert(form.registerUsername + ' ' + form.registerPassword);
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='registerUsername'>Username</label>
                <input id='registerUsername' type='text' value={form.registerUsername} onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor='registerPassword'>Password</label>
                <input id='registerPassword' type='password' value={form.registerPassword} onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor='confirmRegisterPassword'>Confirm Password</label>
                <input id='confirmRegisterPassword' type='password' value={form.confirmRegisterPassword} onChange={handleChange}></input>
            </div>
            <button type='submit'>
                Submit
            </button>
        </form>
    );

};