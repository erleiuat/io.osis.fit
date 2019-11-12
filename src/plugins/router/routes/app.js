export default [{

    path: '/log',
    components: {
        default: () => import('@/views/log/'),
        toolbar: () => import('@/components/Navigation/AppBar/')
    },
    children: [
        {

            path: 'activity',
            name: 'log.activity',
            component: () => import('@/views/log/activity/'),
            meta: { auth: true }

        }, {

            path: 'body',
            name: 'log.body',
            component: () => import('@/views/log/body/'),
            meta: { auth: true }

        }, {

            path: 'food',
            name: 'log.food',
            component: () => import('@/views/log/food/'),
            meta: { auth: true },
            children: [
                {

                    path: 'add',
                    name: 'log.food.add',
                    component: () => import('@/views/log/food/Add'),
                    meta: { auth: true }

                }
            ]

        }
    ]

}, {

    path: '/template',
    name: 'template',
    components: {
        default: () => import('@/views/template/'),
        toolbar: () => import('@/components/Navigation/AppBar/')
    }

}]
