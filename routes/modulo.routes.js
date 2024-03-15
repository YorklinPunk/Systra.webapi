import express  from 'express';
import {    listarModulos,
            guardarModulo,
            editarModulo,
            eliminarModulo } from '../controllers/modulo.controller.js';

const router = express.Router()

/**
 * @openapi
 * '/api/Modulo':
 *  get:
 *     tags:
 *     - Modulo
 *     summary: Lista los modulos por establecimiento penal
 *     parameters:
 *       - in: query
 *         name: CodEstablecimientoPenal
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
 *                      type: object                  
 *                      properties:
 *                          CodModuloPenal:
 *                               type: number
 *                               default: 0
 *                          CodEstablecimientoPenal:
 *                               type: number
 *                               default: 0
 *                          NomModuloPenal:
 *                               type: string
 *                               default: ""
 *                          CodEstado:
 *                               type: number
 *                               default: 0
 *       400:
 *         description: Bad request
 */
router.get('api/Modulo',listarModulos)

/**
 * @openapi
 * '/api/Modulo':
 *  post:
 *     tags:
 *     - Modulo
 *     summary: Guardar nombre de modulo penal
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties: 
 *              CodEstablecimientoPenal:
 *                  type: number
 *                  default: 0
 *              NomModuloPenal:
 *                  type: string
 *                  default: ""
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
router.post('api/Modulo',guardarModulo)

/**
 * @openapi
 * '/api/Modulo':
 *  put:
 *     tags:
 *     - Modulo
 *     summary: Editar Modulo de penal
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
 *              NomModuloPenal:
 *                  type: string
 *                  default: ""
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
router.put('api/Modulo',editarModulo)

/**
 * @openapi
 * '/api/Modulo':
 *  delete:
 *     tags:
 *     - Modulo
 *     summary: Elimina Modulo de penal
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
router.delete('api/Modulo',eliminarModulo)

export default router