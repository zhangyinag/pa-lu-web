export interface MenuOption {
  name: string
  icon?: string
  pid?: string,
  link?: string
  children?: Array<MenuOption>
}

const options: Array<MenuOption> = [
  {
    name: 'Dashboard',
    icon: 'rocket',
    pid: 'tmr.dashboard',
    link: '/dashboard'
  },
  {
    name: '客户总表',
    icon: 'user',
    pid: 'tmr.customer',
    children: [
      {
        name: '客户查询',
        pid: 'tmr.customer.query',
        link: '/customer/query'
      }
    ]
  }
]

export default options
