import { SideMenu } from '@/modules/shared';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='admin__layout'>
            <SideMenu/>
            <main>
                { children }
            </main>
        </div>
    );
}