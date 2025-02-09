export enum UserRole {
    SUPER_ADMIN = 'SUPER_ADMIN',
    ADMIN = 'ADMIN',
    USER = 'USER',
}

export const USER_ROLES = [
    { value: UserRole.SUPER_ADMIN, label: 'ผู้บริหาร' },
    { value: UserRole.ADMIN, label: 'ผู้ดูแลระบบ' },
    { value: UserRole.USER, label: 'พนักงาน' },
];
