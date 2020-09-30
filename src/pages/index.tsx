import { lazy } from 'react'

export default {
    event: {
        path: '/events/:tab?',
        component: lazy(() => import(`./events`)),
    },
}
