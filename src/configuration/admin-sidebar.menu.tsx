import IconBarChart from '@/components/Icon/IconBarChart';
import IconLogout from '@/components/Icon/IconLogout';
import IconMapPin from '@/components/Icon/IconMapPin';
import IconListCheck from '@/components/Icon/IconListCheck';
import IconBookmark from '@/components/Icon/IconBookmark';
import IconBox from '@/components/Icon/IconBox';
import IconUser from '@/components/Icon/IconUser';
import IconUsersGroup from '@/components/Icon/IconUsersGroup';
import IconPinMap from '@/components/Icon/Crop/IconPinMap';
import IconBell from '@/components/Icon/IconBell';
import IconRestore from '@/components/Icon/IconRestore';
import IconMenuDocumentation from '@/components/Icon/Menu/IconMenuDocumentation';

export const AdminSidebarMenu: any[] = [
    {
        key: 'analytics',
        title: 'สถิติและการวิเคราะห์',
        path: undefined,
        submenu: [],
    },
    {
        key: 'dashboardDITP',
        title: 'DITP',
        path: '/admin/dashboard/ditp',
        icon: IconBarChart,
        submenu: [],
    },
    {
        key: 'dashboardGAP',
        title: 'GAP+',
        path: '/admin/dashboard/gap',
        icon: IconBarChart,
        submenu: [],
    },
    {
        key: 'dashboardDITP',
        title: 'PM 2.5',
        path: '/admin/dashboard/pm',
        icon: IconBarChart,
        submenu: [],
    },
    {
        key: 'menu',
        title: 'เมนู',
        path: undefined,
        submenu: [],
    },
    {
        key: 'farmer',
        title: 'เกษตรกร',
        path: '/admin/farmer',
        icon: IconUsersGroup,
        submenu: [],
    },
    {
        key: 'gap',
        title: 'รายการตรวจสอบ GAP+',
        path: '/admin/gap',
        icon: IconListCheck,
        submenu: [],
    },
    {
        key: 'gap',
        title: 'หนังสือรับรอง GAP+',
        path: '/admin/gap-cert',
        icon: IconBookmark,
        submenu: [],
    },
    {
        key: 'product',
        title: 'สินค้าเกษตร',
        path: '/admin/product',
        icon: IconBox,
        submenu: [],
    },
    {
        key: 'arcGisHeatMap',
        title: 'Heat Map',
        path: '/admin/heatmap',
        icon: IconMapPin,
        submenu: [],
    },
    {
        key: 'arcGisHeatMap',
        title: 'ที่ดินที่พบจุดเผา',
        path: '/admin/heat/alert',
        icon: IconBell,
        submenu: [],
    },
    {
        key: 'arcGisHeatMap',
        title: 'จัดการจุดเผา',
        path: '/admin/heat/respond',
        icon: IconMenuDocumentation,
        submenu: [],
    },
    {
        key: 'account',
        title: 'การตั้งค่า',
        path: undefined,
        submenu: [],
    },
    {
        key: 'profile',
        path: '/admin/users',
        title: 'ผู้ตรวจประเมิน',
        icon: IconUser,
        submenu: [],
    },
    {
        key: 'logout',
        path: '/login',
        title: 'ออกจากระบบ',
        icon: IconLogout,
        submenu: [],
    },
];
