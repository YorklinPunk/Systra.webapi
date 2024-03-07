import express from 'express'
import {    listaEstadoCivil,
            listaAreaLaboral,
            listaFuncionLaboral,
            listaModalidadLaboral,
            listaNivelAcademico,
            listaRegion,
            listaSexo,
            listaTipoDocumento,
            listaPersonaTipo,
            listUsuarioTipo,
            listaDepartamentos,
            listaProvincias,
            listaDistritos,
            listaDelitoGenerico,
            listaDelitoEspecifico
    } from '../controllers/general.controller.js'

const router = express.Router()

/**
 * @openapi
 * '/api/General/estadoCivil':
 *  get:
 *     tags:
 *     - General
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
 *                  CodEstadoCivil:
 *                    type: number
 *                    default: 0
 *                  NomEstadoCivil:
 *                    type: string
 *                    default: ''
 *       400:
 *         description: Bad request
 */
router.get('/api/General/estadoCivil', listaEstadoCivil)

/**
 * @openapi
 * '/api/General/areaLaboral':
 *  get:
 *     tags:
 *     - General
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
 *                  CodAreaLaboral:
 *                    type: number
 *                    default: 0
 *                  NomAreaLaboral:
 *                    type: string
 *                    default: ''
 *       400:
 *         description: Bad request
 */
router.get('/api/General/areaLaboral', listaAreaLaboral)

/**
 * @openapi
 * '/api/General/funcionLaboral':
 *  get:
 *     tags:
 *     - General
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
 *                  CodAreaLaboral:
 *                    type: number
 *                    default: 0
 *                  NomAreaLaboral:
 *                    type: string
 *                    default: ''
 *       400:
 *         description: Bad request
 */
router.get('/api/General/funcionLaboral', listaFuncionLaboral)

/**
 * @openapi
 * '/api/General/modalidadLaboral':
 *  get:
 *     tags:
 *     - General
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
 *                  CodModalidadLaboral:
 *                    type: number
 *                    default: 0
 *                  NomModalidadLaboral:
 *                    type: string
 *                    default: ''
 *       400:
 *         description: Bad request
 */
router.get('/api/General/modalidadLaboral', listaModalidadLaboral)

/**
 * @openapi
 * '/api/General/nivelAcademico':
 *  get:
 *     tags:
 *     - General
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
 *                  CodNivelAcademico:
 *                    type: number
 *                    default: 0
 *                  NomNivelAcademico:
 *                    type: string
 *                    default: ''
 *       400:
 *         description: Bad request
 */
router.get('/api/General/nivelAcademico', listaNivelAcademico)

/**
 * @openapi
 * '/api/General/region':
 *  get:
 *     tags:
 *     - General
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
 *                  CodRegion:
 *                    type: number
 *                    default: 0
 *                  NomRegion:
 *                    type: string
 *                    default: ''
 *       400:
 *         description: Bad request
 */
router.get('/api/General/region', listaRegion)

/**
 * @openapi
 * '/api/General/sexo':
 *  get:
 *     tags:
 *     - General
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
 *                  CodSexo:
 *                    type: number
 *                    default: 0
 *                  NomSexo:
 *                    type: string
 *                    default: ''
 *       400:
 *         description: Bad request
 */
router.get('/api/General/sexo', listaSexo)

/**
 * @openapi
 * '/api/General/tipoDocumento':
 *  get:
 *     tags:
 *     - General
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
 *                  CodTipoDocumento:
 *                    type: number
 *                    default: 0
 *                  NomTipoDocumento:
 *                    type: string
 *                    default: ''
 *       400:
 *         description: Bad request
 */
router.get('/api/General/tipoDocumento', listaTipoDocumento)

/**
 * @openapi
 * '/api/General/personaTipo':
 *  get:
 *     tags:
 *     - General
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
 *                  CodPersonaTipo:
 *                    type: number
 *                    default: 0
 *                  NomPersonaTipo:
 *                    type: string
 *                    default: ''
 *       400:
 *         description: Bad request
 */
router.get('/api/General/personaTipo', listaPersonaTipo)

/**
 * @openapi
 * '/api/General/usuarioTipo':
 *  get:
 *     tags:
 *     - General
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
 *                  CodTipoUsuario:
 *                    type: number
 *                    default: 0
 *                  NomTipoUsuario:
 *                    type: string
 *                    default: ''
 *       400:
 *         description: Bad request
 */
router.get('/api/General/usuarioTipo', listUsuarioTipo)

/**
 * @openapi
 * '/api/General/comboDepartamento':
 *  get:
 *     tags:
 *     - General
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  isValid:
 *                      type: bool
 *                      default: true
 *                  exceptions:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              code:
 *                                  type: string
 *                                  default: "string"
 *                              description:
 *                                  type: string
 *                                  default: "string"
 *                  content:
 *                      type: array
 *                      items:    
 *                          type: object                  
 *                          properties:
 *                              CodDepartamento:
 *                                  type: number
 *                                  default: 0
 *                              NomDepartamento:
 *                                  type: string
 *                                  default: 'string'
 *       400:
 *         description: Bad request
 */
router.get('/api/General/comboDepartamento', listaDepartamentos)

/**
 * @openapi
 * '/api/General/comboProvincia':
 *  get:
 *     tags:
 *     - General
 *     parameters:
 *       - in: query
 *         name: CodDepartamento
 *         required: true
 *         type: int
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  isValid:
 *                      type: bool
 *                      default: true
 *                  exceptions:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              code:
 *                                  type: string
 *                                  default: "string"
 *                              description:
 *                                  type: string
 *                                  default: "string"
 *                  content:
 *                      type: array
 *                      items:    
 *                          type: object                  
 *                          properties:
 *                              CodProvincia:
 *                                  type: number
 *                                  default: 0
 *                              NomProvincia:
 *                                  type: string
 *                                  default: 'string'
 *       400:
 *         description: Bad request
 */
router.get('/api/General/comboProvincia', listaProvincias)

/**
 * @openapi
 * '/api/General/comboDistrito':
 *  get:
 *     tags:
 *     - General
 *     parameters:
 *       - in: query
 *         name: CodProvincia
 *         required: true
 *         type: int
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  isValid:
 *                      type: bool
 *                      default: true
 *                  exceptions:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              code:
 *                                  type: string
 *                                  default: "string"
 *                              description:
 *                                  type: string
 *                                  default: "string"
 *                  content:
 *                      type: array
 *                      items:    
 *                          type: object                  
 *                          properties:
 *                              CodDistrito:
 *                                  type: number
 *                                  default: 0
 *                              NomDistrito:
 *                                  type: string
 *                                  default: 'string'
 *       400:
 *         description: Bad request
 */
router.get('/api/General/comboDistrito', listaDistritos)

/**
 * @openapi
 * '/api/General/comboDelitoGenerico':
 *  get:
 *     tags:
 *     - General
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  isValid:
 *                      type: bool
 *                      default: true
 *                  exceptions:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              code:
 *                                  type: string
 *                                  default: "string"
 *                              description:
 *                                  type: string
 *                                  default: "string"
 *                  content:
 *                      type: array
 *                      items:    
 *                          type: object                  
 *                          properties:
 *                              CodDelitoGenerico:
 *                                  type: number
 *                                  default: 0
 *                              NomDelitoGenerico:
 *                                  type: string
 *                                  default: 'string'
 *       400:
 *         description: Bad request
 */
router.get('/api/General/comboDelitoGenerico', listaDelitoGenerico)

/**
 * @openapi
 * '/api/General/comboDelitoEspecifico':
 *  get:
 *     tags:
 *     - General
 *     parameters:
 *       - in: query
 *         name: CodDelitoGenerico
 *         required: true
 *         type: int
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  isValid:
 *                      type: bool
 *                      default: true
 *                  exceptions:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              code:
 *                                  type: string
 *                                  default: "string"
 *                              description:
 *                                  type: string
 *                                  default: "string"
 *                  content:
 *                      type: array
 *                      items:    
 *                          type: object                  
 *                          properties:
 *                              CodDelitoEspecifico:
 *                                  type: number
 *                                  default: 0
 *                              NomDelitoEspecifico:
 *                                  type: string
 *                                  default: 'string'
 *       400:
 *         description: Bad request
 */
router.get('/api/General/comboDelitoEspecifico', listaDelitoEspecifico)
export default router