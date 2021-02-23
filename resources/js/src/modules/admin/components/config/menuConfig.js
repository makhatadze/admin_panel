export default [
    {
        title: 'Dashboard',
        key: '/admin/dashboard',
        icon: 'dashboard',
        isLevel: true
    },
    {
        title: 'UI',
        key: '/admin/ui',
        icon: 'underline',
        isLevel: false,
        children: [
            {
                title: '表格',
                key: '/admin/ui/table',
                isLevel: true
            },
            {
                title: '表单',
                key: '/admin/ui/form',
                isLevel: true
            },
            {
                title: '弹框',
                key: '/admin/ui/modal',
                isLevel: true
            }
        ]
    },
    {
        title: 'City',
        key: '/admin/city',
        icon: 'area-chart',
        isLevel: true
    },
    {
        title: 'Order',
        key: '/admin/order',
        icon: 'file-text',
        isLevel: true
    },
    {
        title: 'User',
        key: '/admin/user',
        icon: 'user',
        isLevel: true
    },
    {
        title: 'Map',
        key: '/admin/map',
        icon: 'alibaba',
        isLevel: true
    },
    {
        title: 'Config',
        key: '/admin/config',
        icon: 'setting',
        isLevel: true
    }
]