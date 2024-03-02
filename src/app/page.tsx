'use client';

import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link href='/'>Home</Link>
            <Link href='/sign-in'>Sign In</Link>
        </div>
    );
};