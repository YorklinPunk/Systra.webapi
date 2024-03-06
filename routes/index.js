import express from 'express'
import personRoutes from './person.routes.js'
import generalRoutes from './general.routes.js'
import loginRoutes from './login.routes.js'

const router = express.Router()

router.use(personRoutes)
router.use(generalRoutes)
router.use(loginRoutes)

export default router