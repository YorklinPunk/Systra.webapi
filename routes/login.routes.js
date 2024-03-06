import express from 'express'
import { login } from '../controllers/login.controller.js'

const router = express.Router()

/**
* @openapi
* '/api/Login':
*  get:
*     tags:
*     - Login
*     summary: Inicio Seción
*     parameters:
*       - in: query
*         name: NomUsuario
*         required: true
*         type: string
*       - in: query
*         name: ClaveUsuario
*         required: true
*         type: string
*     responses:
*       200:
*         description: Success
*         content:
*          application/json:
*            schema:
*              type: array
*              items:
*                type: object
*                properties:
*                  Respuesta1:
*                       type:  object
*                       properties:
*                           CodResultado:
*                             type: number
*                             default: 0
*                           CodUsuario:
*                             type: number
*                             default: 0
*                           DesResultado:
*                             type: string
*                             default: ''
*                  ListaMenus:
*                      type:  array
*                      items:
*                       type: object
*                       properties:
*                          CodMenu:
*                            type: number
*                            default: 0
*                          CodMenuPadre:
*                            type: number
*                            default: 0
*                          NomMenu:
*                            type: string
*                            default: ''
*       400:
*         description: Bad request
*/
router.get('/api/Login', login)

export default router