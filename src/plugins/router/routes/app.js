export default [{

    path: '/log',
    components: {
        default: () => import('@/views/log/'),
        toolbar: () => import('@/views/log/AppBar')
    },
    children: [
        {
            path: 'activity',
            component: () => import('@/views/log/activity/'),
            meta: { auth: true },
            children: [
                {
                    path: 'add',
                    name: 'log.activity.add',
                    component: () => import('@/views/log/activity/Add'),
                    meta: { auth: true }
                },
                {
                    path: ':year?/:week?',
                    name: 'log.activity',
                    component: () => import('@/views/log/activity/List'),
                    meta: { auth: true }
                }
            ]
        }, {
            path: 'body',
            component: () => import('@/views/log/body/'),
            meta: { auth: true },
            children: [
                {
                    path: 'add',
                    name: 'log.body.add',
                    component: () => import('@/views/log/body/Add'),
                    meta: { auth: true }
                },
                {
                    path: '',
                    name: 'log.body',
                    component: () => import('@/views/log/body/List'),
                    meta: { auth: true }
                }
            ]
        }, {
            path: 'food',
            component: () => import('@/views/log/food/'),
            meta: { auth: true },
            children: [
                {
                    path: 'add',
                    name: 'log.food.add',
                    component: () => import('@/views/log/food/Add'),
                    meta: { auth: true }
                },
                {
                    path: ':year?/:week?',
                    name: 'log.food',
                    component: () => import('@/views/log/food/List'),
                    meta: { auth: true }
                }
            ]
        }
    ]

}, {

    path: '/template',
    components: {
        default: () => import('@/views/template/'),
        toolbar: () => import('@/views/template/AppBar')
    },
    children: [
        {
            path: '',
            name: 'template',
            component: () => import('@/views/template/List'),
            meta: { auth: true }
        },
        {
            path: 'add',
            name: 'template.add',
            component: () => import('@/views/template/Editor'),
            meta: { auth: true }
        },
        {
            path: 'edit/:id',
            name: 'template.edit',
            component: () => import('@/views/template/Editor'),
            meta: { auth: true }
        }
    ]

}]
