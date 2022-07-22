import React from 'react'
import Siderbar from './Siderbar'
import { useRouter } from 'next/router'

export default function Layout({children}) {
    const router = useRouter();
    const isSidebarVisible = router.route === '/login' || router.route === '/';

    return (
        <div className='flex'>
            {
                !isSidebarVisible && <Siderbar />
            }
            <main className='flex-1 p-10'>
                {children}
            </main>
        </div>
    )
}
