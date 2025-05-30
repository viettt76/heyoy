'use client';

import Header from '@/app/components/Header';
import AppProvider from '@/app/components/AppProvider';
import ScrollToTop from '@/app/components/ScrollToTop';
import SocketProvider from '@/app/components/SocketProvider';
import ConversationBubbles from '@/app/components/ConversationBubbles';
import { usePathname, useRouter } from '@/i18n/routing';
import MovieHeader from '@/app/components/MovieHeader';
import { useEffect, useState } from 'react';

export default function DefaultLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const router = useRouter();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            router.push('/login');
        } else {
            setLoading(false);
        }
    }, [router]);

    if (loading) return null;

    return (
        <AppProvider>
            <SocketProvider>
                <ConversationBubbles />
                <ScrollToTop />
                <div className="flex flex-col h-screen">
                    {pathname.includes('/movie') ? <MovieHeader /> : <Header />}
                    <div className="flex-1">{children}</div>
                </div>
            </SocketProvider>
        </AppProvider>
    );
}
