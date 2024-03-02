'use client';

import Link from 'next/link';

export default function Register() {
    return(
        <div>
            <Link href='/'>Home</Link>
            <Link href='/sign-in'>Sign In</Link>
            <h1>Register</h1>
        </div>
    );
};