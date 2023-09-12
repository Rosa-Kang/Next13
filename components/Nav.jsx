'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { signIn, signOut, useSession, getProvider } from 'next-auth/react';

const Nav = () => {
    return (
        <nav className="flex-between w-full md-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center">
                <Image src="/assets/images/logo.svg" alt="Promptopia Logo" width={30} height={30} className="object-contain" />
            </Link>
        </nav>
    );
};

export default Nav;
