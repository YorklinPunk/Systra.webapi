import express from 'express'
import personRoutes from './person.routes.js'
import generalRoutes from './general.routes.js'
import loginRoutes from './login.routes.js'
import pEstablishment from './pEstablishment.routes.js'
import modulo from './modulo.routes.js'
import pabellon from './pabellon.routes.js'

const router = express.Router()

router.use(personRoutes)
router.use(generalRoutes)
router.use(loginRoutes)
router.use(pEstablishment)
router.use(modulo)
router.use(pabellon)

export default router