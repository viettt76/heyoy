'use client';

import { useRouter } from '@/i18n/routing';
import { useEffect } from 'react';

export default function NoHeaderLayout({ children }) {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            router.push('/');
        }
    }, [router]);

    return <div>{children}</div>;
}
