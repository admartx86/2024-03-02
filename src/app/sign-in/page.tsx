'use client';

import Link from 'next/link';
import SignInForm from './SignInForm'

export default function SignIn() {
    return(
        <div>
            <Link href='/'>Home</Link>
            <Link href='/sign-in'>Sign In</Link>
            <h1>Sign In</h1>
            <SignInForm/>
            New user? <Link href='/register'>Create an account</Link>.
        </div>
    );
};