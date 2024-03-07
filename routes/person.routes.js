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
 *     summary: Get a people
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
 *             type: object
 *             properties:
 *               CodPersona:
 *                 type: number
 *                 default: 0
 *               CodigoTrabajador:
 *                 type: number
 *                 default: 0
 *               ApPaterno:
 *                 type: string
 *                 default: ''
 *               ApMaterno:
 *                 type: string
 *                 default: ''
 *               NomPersona:
 *                 type: string
 *                 default: ''
 *               NomPersonaTipos:
 *                 type: string
 *                 default: ''
 *               NumeroDocumento:
 *                 type: string
 *                 default: ''
 *               Telefono:
 *                 type: string
 *                 default: ''
 *               NomAreaLaboral:
 *                 type: string
 *                 default: ''
 *               CodEstado:
 *                 type: int
 *                 default: 0
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
 *                  default: 0
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
 *                  default: 0
 *              CodAreaLaboral:
 *                  type: number
 *                  default: 0
 *              CodTipoDocumento:
 *                  type: number
 *                  default: 0
 *              NumeroDocumento:
 *                  type: string
 *                  default: ''
 *              FechaNacimiento:
 *                  type: string
 *                  default: ''
 *              CodSexo:
 *                  type: number
 *                  default: 0
 *              CodEstadoCivil:
 *                  type: number
 *                  default: 0
 *              CodNivelEstudio:
 *                  type: number
 *                  default: 0
 *              Especialidad:
 *                  type: string
 *                  default: ''
 *              Telefono:
 *                  type: string
 *                  default: ''
 *              CodUsuarioCreacion:
 *                  type: number
 *                  default: 0
 *              CodNivelAcademico:
 *                  type: number
 *                  default: 0
 *              CodModalidadLaboral:
 *                  type: number
 *                  default: 0
 *              CodFuncionLaboral:
 *                  type: number
 *                  default: 0
 *              CondicionLaboral:
 *                  type: number
 *                  default: 0
 *              FechaIngreso:
 *                  type: number
 *                  default: 0
 *              CodProcedencia:
 *                  type: number
 *                  default: 0
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
 *                  default: 0
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
 *                  default: 0
 *              CodAreaLaboral:
 *                  type: number
 *                  default: 0
 *              FechaNacimiento:
 *                  type: string
 *                  default: ''
 *              CodEstadoCivil:
 *                  type: number
 *                  default: 0
 *              CodNivelEstudio:
 *                  type: number
 *                  default: 0
 *              Especialidad:
 *                  type: string
 *                  default: ''
 *              Telefono:
 *                  type: string
 *                  default: ''
 *              CodUsuarioEdicion:
 *                  type: number
 *                  default: 0
 *              CodNivelAcademico:
 *                  type: number
 *                  default: 0
 *              CodModalidadLaboral:
 *                  type: number
 *                  default: 0
 *              CondicionLaboral:
 *                  type: number
 *                  default: 0
 *              FechaIngreso:
 *                  type: number
 *                  default: 0
 *              CodProcedencia:
 *                  type: number
 *                  default: 0
 *              CodEstado:
 *                  type: number
 *                  default: 0
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
 *                  default: 0
 *              CodPersona:
 *                  type: number
 *                  default: 0
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