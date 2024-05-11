export const RoleType =  {
    Admin: 'admin',
    User: 'user'
}

export type RoleType = typeof RoleType[keyof typeof RoleType];
export const allRoleType = Object.values(RoleType);

export type UserType =  {
    name:string,
    role: RoleType
}