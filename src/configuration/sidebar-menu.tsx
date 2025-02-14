import IconAirplay from '@/components/Icon/IconAirplay';
import IconBarChart from '@/components/Icon/IconBarChart';
import IconBox from '@/components/Icon/IconBox';
import IconGlobe from '@/components/Icon/IconGlobe';
import IconHeart from '@/components/Icon/IconHeart';
import IconHome from '@/components/Icon/IconHome';
import IconLogout from '@/components/Icon/IconLogout';
import IconMapPin from '@/components/Icon/IconMapPin';
import IconPlusCircle from '@/components/Icon/IconPlusCircle';
import IconShoppingCart from '@/components/Icon/IconShoppingCart';
import IconStar from '@/components/Icon/IconStar';
import IconUser from '@/components/Icon/IconUser';
import IconWheel from '@/components/Icon/IconWheel';

export const SidebarMenu: any[] = [
    {
        key: 'analytics',
        title: 'หน้าแรก',
        path: undefined,
    },
    {
        key: 'dashboard',
        title: 'หน้าแรก',
        path: '/home',
        icon: IconHome,
        submenu: [],
    },
    {
        key: 'menu',
        title: 'เมนู',
        path: undefined,
    },
    {
        key: 'myLand',
        title: 'พื้นที่ปลูก',
        path: '/land/my-land',
        icon: IconMapPin,
    },
    {
        key: 'start',
        title: 'เริ่มปลูก',
        path: '/start',
        icon: IconAirplay,
    },

    {
        key: 'care',
        title: 'การดูแล',
        path: '/crop-care',
        icon: IconHeart,
    },
    {
        key: 'addLand',
        title: 'แผนการปลูก',
        path: '/plan',
        icon: IconPlusCircle,
    },
    {
        key: 'gap',
        title: '',
        path: '/land/gap',
        icon: IconStar,
    },
    {
        key: 'buySell',
        title: 'ซื้อ-ขาย',
        path: '/no-page',
        icon: IconShoppingCart,
    },
    {
        key: 'expert',
        title: 'ผู้เชี่ยวชาญ',
        path: '/no-page',
        icon: IconGlobe,
    },
    {
        key: 'history',
        title: 'ประวัติการปลูก',
        path: '/no-page',
        icon: IconWheel,
    },
    // {
    //     key: 'land',
    //     title: 'Land',
    //     path: '/land',
    //     icon: IconBox,
    //     submenu: [
    //         {
    //             title: 'My Land',
    //             path: '/land/my-land',
    //         },
    //         {
    //             title: 'Add Land',
    //             path: '/land/add-land',
    //         },
    //     ],
    // },
    {
        key: 'account',
        title: 'การตั้งค่า',
        path: undefined,
    },
    {
        key: 'profile',
        path: '/profile/account',
        title: 'บัญชีผู้ใช้',
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
