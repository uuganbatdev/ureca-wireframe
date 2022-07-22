import { useRouter } from 'next/router'
import { useEffect } from 'react';


export default function TechnologyProvider() {
    const router = useRouter();

    useEffect(() => {
        // console.log(router);
        router.push('tp/profile');
    },[])

    return (
        <>
        </>
    );
}


