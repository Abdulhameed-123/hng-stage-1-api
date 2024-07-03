import { Router } from 'express'
import { appRoutes } from './app.route.js'

const router = Router()

export const setRoutes = () => {
    router.use('/hello', appRoutes())
    return router
}
