'use client';

import Link from 'next/link';

export default function Register() {
    return(
        <div>
            <h1>Register</h1>
            <Link href='/'>Home</Link>
            <Link href='/sign-in'>Sign In</Link>
        </div>
    );
};