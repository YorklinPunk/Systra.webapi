import express from 'express'
import {    listaGeneralEP,
            listaEP,
            ComboGeneralEP,
            AsignarModulos } from '../controllers/pEstablishment.controller.js'   

const router = express.Router()

/**
 * @openapi
 * '/api/pEstablishment':
 *  get:
 *     tags:
 *     - pEstablishment
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
 *                              CodEstablecimientoPenal:
 *                                   type: number
 *                                   default: 0
 *                              CodRegion:
 *                                   type: number
 *                                   default: 0
 *                              NomEstablecimientoPenal:
 *                                   type: string
 *                                   default: ""
 *                              Departamento:
 *                                   type: string
 *                                   default: ""
 *                              Provincia:
 *                                   type: string
 *                                   default: ""
 *                              Distrito:
 *                                   type: string
 *                                   default: ""
 *                              Direccion:
 *                                   type: string
 *                                   default: ""
 *                              Telefono:
 *                                   type: string
 *                                   default: ""
 *                              CodDepartamento:
 *                                   type: number
 *                                   default: 0
 *                              CodProvincia:
 *                                   type: number
 *                                   default: 0
 *                              CodDistrito:
 *                                   type: number
 *                                   default: 0
 *                              CantidadModulo:
 *                                   type: string
 *                                   default: ""
 *                              CodEstado:
 *                                   type: number
 *                                   default: 0
 *       400:
 *         description: Bad request
 */
router.get('api/pEstablishment', listaGeneralEP)

/**
 * @openapi
 * '/api/pEstablishment/CodEstablecimientoPenal':
 *  get:
 *     tags:
 *     - pEstablishment
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
 *                          CodEstablecimientoPenal:
 *                               type: number
 *                               default: 0
 *                          CodRegion:
 *                               type: number
 *                               default: 0
 *                          NomEstablecimientoPenal:
 *                               type: string
 *                               default: ""
 *                          Departamento:
 *                               type: string
 *                               default: ""
 *                          Provincia:
 *                               type: string
 *                               default: ""
 *                          Distrito:
 *                               type: string
 *                               default: ""
 *                          Direccion:
 *                               type: string
 *                               default: ""
 *                          Telefono:
 *                               type: string
 *                               default: ""
 *                          CodDepartamento:
 *                               type: number
 *                               default: 0
 *                          CodProvincia:
 *                               type: number
 *                               default: 0
 *                          CodDistrito:
 *                               type: number
 *                               default: 0
 *                          CantidadModulo:
 *                               type: string
 *                               default: ""
 *                          CodEstado:
 *                               type: number
 *                               default: 0
 *       400:
 *         description: Bad request
 */
router.get('api/pEstablishment/CodEstablecimientoPenal', listaEP)

/**
 * @openapi
 * '/api/pEstablishment/combo':
 *  get:
 *     tags:
 *     - pEstablishment
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
 *                          CodEstablecimientoPenal:
 *                               type: number
 *                               default: 0
 *                          NomEstablecimientoPenal:
 *                               type: string
 *                               default: ""
 *       400:
 *         description: Bad request
 */
router.get('api/pEstablishment/Combo', ComboGeneralEP)

/**
 * @openapi
 * '/api/pEstablishment/asignarModulos':
 *  post:
 *     tags:
 *     - pEstablishment
 *     summary: Asignar cantidad de Módulos a un EP
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
 *              CantidadModulos:
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
router.post('api/pEstablishment/asignarModulos',AsignarModulos)

export default router