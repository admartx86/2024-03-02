'use client';

import Link from 'next/link';

export default function SignIn() {
    return(
        <div>
            <h1>Sign In</h1>
            <Link href='/'>Home</Link>
            <Link href='/sign-in'>Sign In</Link>
        </div>
    );
};