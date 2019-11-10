export default [{

    path: '/settings',
    components: {
        default: () => import('@/views/general/settings/'),
        toolbar: () => import('@/components/Navigation/AppBar/')
    },
    children: [
        {

            path: 'account',
            name: 'settings.account',
            component: () => import('@/views/general/settings/Account/'),
            meta: { auth: true }

        }, {

            path: 'app',
            name: 'settings.app',
            component: () => import('@/views/general/settings/App/'),
            meta: { auth: true }

        }
    ]

}, {

    path: '/admin',
    components: {
        default: () => import('@/views/general/settings/'),
        toolbar: () => import('@/components/Navigation/AppBar/')
    },
    children: [
        {

            path: 'log',
            name: 'admin.log',
            component: () => import('@/views/general/admin/Log'),
            meta: { auth: true }

        }, {

            path: 'accounts',
            name: 'admin.accounts',
            component: () => import('@/views/general/admin/Accounts/'),
            meta: { auth: true }

        }, {

            path: 'errorcodes',
            name: 'admin.errorcodes',
            component: () => import('@/views/general/admin/ErrorCodes'),
            meta: { auth: true }

        }, {

            path: 'images',
            name: 'admin.images',
            component: () => import('@/views/general/admin/Images'),
            meta: { auth: true }

        }
    ]

}]
