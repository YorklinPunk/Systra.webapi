import express from 'express'
import {
    listarPersonas,
    listarPersona,
    guardarPersona,
    editarPersona,
    eliminarPersona
} from '../controllers/person.controller.js'

const router = express.Router()

/**
 * @openapi
 * '/api/Person/total':
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
 *                    default: 0
 *                  CodigoTrabajador:
 *                    type: number
 *                    default: 0
 *                  ApPaterno:
 *                    type: string
 *                    default: ''
 *                  ApMaterno:
 *                    type: string
 *                    default: ''
 *                  NomPersona:
 *                    type: string
 *                    default: ''
 *                  NomPersonaTipo:
 *                    type: string
 *                    default: ''
 *                  NumeroDocumento:
 *                    type: string
 *                    default: ''
 *                  Telefono:
 *                    type: string
 *                    default: ''
 *                  NomAreaLaboral:
 *                    type: string
 *                    default: ''
 *                  CodEstado:
 *                    type: int
 *                    default: 0
 *       400:
 *         description: Bad request
 */
router.get('/api/Person/total', listarPersonas)

/**
 * @openapi
 * '/api/Person':
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
 *                    default: 0
 *                  CodigoTrabajador:
 *                    type: number
 *                    default: 0
 *                  ApPaterno:
 *                    type: string
 *                    default: ''
 *                  ApMaterno:
 *                    type: string
 *                    default: ''
 *                  NomPersona:
 *                    type: string
 *                    default: ''
 *                  NomPersonaTipo:
 *                    type: string
 *                    default: ''
 *                  NumeroDocumento:
 *                    type: string
 *                    default: ''
 *                  Telefono:
 *                    type: string
 *                    default: ''
 *                  NomAreaLaboral:
 *                    type: string
 *                    default: ''
 *                  CodEstado:
 *                    type: int
 *                    default: 0
 *       400:
 *         description: Bad request
 */
router.get('/api/Person', listarPersona)

/**
 * @openapi
 * '/api/Person':
 *  post:
 *     tags:
 *     - Person
 *     summary: Guardar Persona
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties: 
 *              CodigoTrabajador:
 *                  type: number
 *                  default: null
 *              ApPaterno:
 *                  type: string
 *                  default: ''
 *              ApMaterno:
 *                  type: string
 *                  default: ''
 *              NomPersona:
 *                  type: string
 *                  default: ''
 *              CodPersonaTipo:
 *                  type: number
 *                  default: null
 *              CodAreaLaboral:
 *                  type: number
 *                  default: null
 *              CodTipoDocumento:
 *                  type: number
 *                  default: null
 *              NumeroDocumento:
 *                  type: string
 *                  default: ''
 *              FechaNacimiento:
 *                  type: string
 *                  default: ''
 *              CodSexo:
 *                  type: number
 *                  default: null
 *              CodEstadoCivil:
 *                  type: number
 *                  default: null
 *              CodNivelEstudio:
 *                  type: number
 *                  default: null
 *              Especialidad:
 *                  type: string
 *                  default: ''
 *              Telefono:
 *                  type: string
 *                  default: ''
 *              CodUsuarioCreacion:
 *                  type: number
 *                  default: null
 *              CodNivelAcademico:
 *                  type: number
 *                  default: null
 *              CodModalidadLaboral:
 *                  type: number
 *                  default: null
 *              CodFuncionLaboral:
 *                  type: number
 *                  default: null
 *              CondicionLaboral:
 *                  type: number
 *                  default: null
 *              FechaIngreso:
 *                  type: number
 *                  default: null
 *              CodProcedencia:
 *                  type: number
 *                  default: null
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.post('/api/Person', guardarPersona)

/**
 * @openapi
 * '/api/Person':
 *  put:
 *     tags:
 *     - Person
 *     summary: Editar Persona
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties: 
 *              CodPersona:
 *                  type: number
 *                  default: null
 *              ApPaterno:
 *                  type: string
 *                  default: ''
 *              ApMaterno:
 *                  type: string
 *                  default: ''
 *              NomPersona:
 *                  type: string
 *                  default: ''
 *              CodPersonaTipo:
 *                  type: number
 *                  default: null
 *              CodAreaLaboral:
 *                  type: number
 *                  default: null
 *              FechaNacimiento:
 *                  type: string
 *                  default: ''
 *              CodEstadoCivil:
 *                  type: number
 *                  default: null
 *              CodNivelEstudio:
 *                  type: number
 *                  default: null
 *              Especialidad:
 *                  type: string
 *                  default: ''
 *              Telefono:
 *                  type: string
 *                  default: ''
 *              CodUsuarioEdicion:
 *                  type: number
 *                  default: null
 *              CodNivelAcademico:
 *                  type: number
 *                  default: null
 *              CodModalidadLaboral:
 *                  type: number
 *                  default: null
 *              CondicionLaboral:
 *                  type: number
 *                  default: null
 *              FechaIngreso:
 *                  type: number
 *                  default: null
 *              CodProcedencia:
 *                  type: number
 *                  default: null
 *              CodEstado:
 *                  type: number
 *                  default: null
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.put('/api/Person',editarPersona)

/**
 * @openapi
 * '/api/Person':
 *  delete:
 *     tags:
 *     - Person
 *     summary: Eliminar Persona
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties: 
 *              CodUsuarioAccion:
 *                  type: number
 *                  default: null
 *              CodPersona:
 *                  type: number
 *                  default: null
 *              ComentarioEliminacion:
 *                  type: string
 *                  default: ''
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.delete('/api/Person',eliminarPersona)

export default router