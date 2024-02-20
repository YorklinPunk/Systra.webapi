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
            listUsuarioTipo
    } from '../controllers/general.controller.js'

const router = express.Router()

/**
 * @openapi
 * '/api/General/estadoCivil':
 *  get:
 *     tags:
 *     - General
 *     summary: Get all status
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
 *                  NomEstadoCivil:
 *                    type: string
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
 *     summary: Get all status
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
 *                  NomAreaLaboral:
 *                    type: string
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
 *     summary: Get all status
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
 *                  NomAreaLaboral:
 *                    type: string
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
 *     summary: Get all status
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
 *                  NomModalidadLaboral:
 *                    type: string
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
 *     summary: Get all status
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
 *                  NomNivelAcademico:
 *                    type: string
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
 *     summary: Get all status
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
 *                  NomRegion:
 *                    type: string
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
 *     summary: Get all status
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
 *                  NomSexo:
 *                    type: string
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
 *     summary: Get all status
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
 *                  NomTipoDocumento:
 *                    type: string
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
 *     summary: Get all status
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
 *                  NomPersonaTipo:
 *                    type: string
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
 *     summary: Get all status
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
 *                  NomTipoUsuario:
 *                    type: string
 *       400:
 *         description: Bad request
 */
router.get('/api/General/usuarioTipo', listUsuarioTipo)

export default router