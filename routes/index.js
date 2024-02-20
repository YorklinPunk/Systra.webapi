import express from 'express'
import heroRoutes from './hero.routes.js'
import tallerRoutes from './taller.routes.js'
import personRoutes from './person.routes.js'
import generalRoutes from './general.routes.js'

const router = express.Router()

router.use(heroRoutes)
router.use(tallerRoutes)
router.use(personRoutes)
router.use(generalRoutes)

export default router