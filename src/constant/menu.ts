export interface TConfigMenu {
  title: string;
  url: string;
  role: any;
}

export const configMenu: TConfigMenu[] = [
  {
    title: 'menu.adminUser',
    url: '/',
    role: ['admin', 'user'],
  },
  {
    title: 'menu.admin',
    url: '/role-admin',
    role: ['admin'],
  },
  {
    title: 'menu.user',
    url: '/role-user',
    role: ['user'],
  },
];
