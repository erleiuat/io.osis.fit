export default [{

    path: '/',
    name: 'home',
    redirect: { name: 'home.today' }

}, {

    path: '/home',
    components: {
        default: () => import('@/views/main/Home/'),
        toolbar: () => import('@/views/main/Home/AppBar')
    },
    meta: { auth: true },
    children: [
        {
            path: 'today',
            name: 'home.today',
            component: () => import('@/views/main/Home/Today/'),
            meta: { auth: true }
        },
        {
            path: 'week',
            name: 'home.week',
            component: () => import('@/views/main/Home/Week/'),
            meta: { auth: true }
        }
    ]

}, {

    path: '/about',
    components: {
        default: () => import('@/views/main/About/'),
        toolbar: () => import('@/views/main/About/AppBar')
    },
    children: [
        {
            path: '',
            name: 'about',
            component: () => import('@/views/main/About/Overview')
        },
        {
            path: 'imprint',
            name: 'about.imprint',
            component: () => import('@/views/main/About/docs/Imprint')
        },
        {
            path: 'cookie',
            name: 'about.cookie',
            component: () => import('@/views/main/About/docs/Cookie')
        },
        {
            path: 'privacy',
            name: 'about.privacy',
            component: () => import('@/views/main/About/docs/Privacy')
        },
        {
            path: 'terms',
            name: 'about.terms',
            component: () => import('@/views/main/About/docs/Terms')
        }
    ]

}, {

    path: '/support',
    components: {
        default: () => import('@/views/main/Support/'),
        toolbar: () => import('@/views/main/Support/AppBar')
    },
    children: [
        {
            path: '',
            name: 'support',
            component: () => import('@/views/main/Support/FAQ')
        },
        {
            path: 'contact',
            name: 'support.contact',
            component: () => import('@/views/main/Support/Contact')
        },
        {
            path: 'install',
            name: 'support.install',
            component: () => import('@/views/main/Support/Install/')
        }
    ]

}, {

    path: '/theme',
    name: 'theme',
    components: {
        default: () => import('@/views/main/Theme/'),
        toolbar: () => import('@/components/Navigation/AppBar/')
    }

}, {

    path: '*',
    name: 'notFound',
    components: {
        default: () => import('@/views/main/NotFound/'),
        toolbar: () => import('@/components/Navigation/AppBar/')
    }

}]
