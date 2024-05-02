import { Navbar, SideMenu } from '@/modules/shared';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='admin__layout'>
            <SideMenu/>
            <main className='w-full'>
                <Navbar/>
                { children }
            </main>
        </div>
    );
}