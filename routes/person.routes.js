import express from 'express'
import {
    listarPersonas,
    listarPersona
} from '../controllers/person.controller.js'

const router = express.Router()

/**
 * @openapi
 * '/api/Person':
 *  get:
 *     tags:
 *     - Person
 *     summary: Get all people
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
 *                  CodPersona:
 *                    type: number
 *                  CodigoTrabajador:
 *                    type: number
 *                  ApPaterno:
 *                    type: string
 *                  ApMaterno:
 *                    type: string
 *                  NomPersona:
 *                    type: string
 *                  NomPersonaTipo:
 *                    type: string
 *                  NumeroDocumento:
 *                    type: string
 *                  Telefono:
 *                    type: string
 *                  NomAreaLaboral:
 *                    type: string
 *                  NomUsuario:
 *                    type: string
 *                  CodEstado:
 *                    type: int
 *       400:
 *         description: Bad request
 */

router.get('/api/Person', listarPersonas)

/**
 * @openapi
 * '/api/Person/personal':
 *  get:
 *     tags:
 *     - Person
 *     summary: Get people
 *     parameters:
 *       - in: query
 *         name: CodPersona
 *         required: false
 *         type: integer
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
 *                  CodPersona:
 *                    type: number
 *                  CodigoTrabajador:
 *                    type: number
 *                  ApPaterno:
 *                    type: string
 *                  ApMaterno:
 *                    type: string
 *                  NomPersona:
 *                    type: string
 *                  NomPersonaTipo:
 *                    type: string
 *                  NumeroDocumento:
 *                    type: string
 *                  Telefono:
 *                    type: string
 *                  NomAreaLaboral:
 *                    type: string
 *                  NomUsuarioCreacion:
 *                    type: string
 *                  CodEstado:
 *                    type: int
 *       400:
 *         description: Bad request
 */

router.get('/api/Person/personal', listarPersona)

export default router