import express from 'express'
import {    listaPabellon,
            listaComboPabellon,
            guardarPabellon,
            editarPabellon,
            eliminarPabellon,
            listaPisosPabellon   } from '../controllers/pabellon.controller.js'        

const router = express.Router()

/**
 * @openapi
 * '/api/Pabellon':
 *  get:
 *     tags:
 *     - Pabellon
 *     summary: Lista los Pabellones por Modulo
 *     parameters:
 *       - in: query
 *         name: CodModuloPenal
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
 *                              CodPabellon:
 *                                   type: number
 *                                   default: 0
 *                              CodModuloPenal:
 *                                   type: number
 *                                   default: 0
 *                              CantidadPisos:
 *                                   type: number
 *                                   default: 0
 *                              NomPabellon:
 *                                   type: string
 *                                   default: ""
 *                              CodEstado:
 *                                   type: number
 *                                   default: 0
 *       400:
 *         description: Bad request
 */
router.get('api/Pabellon', listaPabellon)

/**
 * @openapi
 * '/api/Pabellon':
 *  get:
 *     tags:
 *     - Pabellon
 *     summary: Lista combo de pabellones por modulo
 *     parameters:
 *       - in: query
 *         name: CodModuloPenal
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
 *                              CodPabellon:
 *                                   type: number
 *                                   default: 0
 *                              NomPabellon:
 *                                   type: string
 *                                   default: ""
 *       400:
 *         description: Bad request
 */
router.get('api/Pabellon/combo', listaComboPabellon)

/**
 * @openapi
 * '/api/Pabellon':
 *  post:
 *     tags:
 *     - Pabellon
 *     summary: Guardar nuevo pabellon
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties: 
 *              CodModuloPenal:
 *                  type: number
 *                  default: 0
 *              NomPabellon:
 *                  type: string
 *                  default: ""
 *              CantidadPisos:
 *                  type: number
 *                  default: 0
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
 *                      type: object                  
 *                      properties:
 *                          CodResultado:
 *                               type: number
 *                               default: 0
 *                          NomResultado:
 *                               type: string
 *                               default: ""
 *       400:
 *         description: Bad request
 */
router.post('api/Pabellon',guardarPabellon)

/**
 * @openapi
 * '/api/Pabellon':
 *  put:
 *     tags:
 *     - Pabellon
 *     summary: Edita pabellon
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties: 
 *              CodPabellon:
 *                  type: number
 *                  default: 0
 *              NomPabellon:
 *                  type: string
 *                  default: ""
 *              CantidadPisos:
 *                  type: number
 *                  default: 0
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
 *                      type: object                  
 *                      properties:
 *                          CodResultado:
 *                               type: number
 *                               default: 0
 *                          NomResultado:
 *                               type: string
 *                               default: ""
 *       400:
 *         description: Bad request
 */
router.post('api/Pabellon',editarPabellon)

/**
 * @openapi
 * '/api/Pabellon':
 *  delete:
 *     tags:
 *     - Pabellon
 *     summary: Elimina pabellon
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties: 
 *              CodPabellon:
 *                  type: number
 *                  default: 0
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
 *                      type: object                  
 *                      properties:
 *                          CodResultado:
 *                               type: number
 *                               default: 0
 *                          NomResultado:
 *                               type: string
 *                               default: ""
 *       400:
 *         description: Bad request
 */
router.post('api/Pabellon',eliminarPabellon)

/**
 * @openapi
 * '/api/Pabellon/listaPisoPabellon':
 *  get:
 *     tags:
 *     - Pabellon
 *     summary: Lista pisos de pabellones
 *     parameters:
 *       - in: query
 *         name: CodPabellon
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
 *                              CodPabellonPiso:
 *                                   type: number
 *                                   default: 0
 *                              CodPabellon:
 *                                   type: string
 *                                   default: 0
 *                              NumPiso:
 *                                   type: number
 *                                   default: 0
 *                              CodEstado:
 *                                   type: string
 *                                   default: 0
 *       400:
 *         description: Bad request
 */
router.get('api/Pabellon/pisoPabellon', listaPisosPabellon)

export default router