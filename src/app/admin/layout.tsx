import { redirect } from 'next/navigation';

import { auth } from '@/auth';
import { User } from '@prisma/client';

import { Navbar, SideMenu } from '@/modules/shared';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    
    const session = await auth();

    if( !session?.user ){
        redirect('/auth/login');
    };

    return (
        <div className='admin__layout'>
            <SideMenu/>
            <main className='admin__layout--main'>
                <Navbar
                    user={session?.user as User}
                />
                { children }
            </main>
        </div>
    );
}