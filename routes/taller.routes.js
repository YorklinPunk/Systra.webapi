import express from 'express'
import { listarTalleres } from '../controllers/taller.controller.js'

const router = express.Router()

/**
 * @openapi
 * '/api/taller':
 *  get:
 *     tags:
 *     - Talleres
 *     summary: Get all talleres
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
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request
 */

router.get('/api/taller', listarTalleres)

export default router