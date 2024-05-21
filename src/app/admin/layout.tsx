import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { Navbar, SideMenu } from '@/modules/shared';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    const session = await auth();

    if( !session?.user ) redirect('/auth/login');

    return (
        <div className='admin__layout'>
            <SideMenu/>
            <main className='admin__layout--main'>
                <Navbar/>
                { children }
            </main>
        </div>
    );
}