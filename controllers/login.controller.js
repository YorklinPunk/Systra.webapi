import sql from 'mssql';
import crypto from 'crypto';
import { getCustomResponse } from '../layouts/customResponse.js';

export async function login(req,res) {
    const requestQuery = req.query;
    
    if (requestQuery && requestQuery.ClaveUsuario) {
        const claveUsuario = requestQuery.ClaveUsuario;
        const sha1 = crypto.createHash('sha1');

        sha1.update(claveUsuario);
        const hashClaveUsuario = sha1.digest('hex');
        requestQuery.ClaveUsuario = hashClaveUsuario;
    }
    const parametros = Object.values(requestQuery).map(value => (value !== null ? value : '')).join('|');

    try {
        const request = new sql.Request();
        const result = await request.query(`dbo.ProcUsuarioSesion '${parametros}',10`);
        const resultado1 = result.recordsets[0][0]; // Suponiendo que el primer conjunto de resultados tiene solo una fila
        const menus = result.recordsets[1];

        let respuestaFormateada = {
            Resultado: resultado1,
            ListaMenus: menus
        };
        respuestaFormateada = menus ? respuestaFormateada : resultado1

        res.json(getCustomResponse(200, '', respuestaFormateada))

    } catch (error) {
        console.log("-->",error)
        if (error.code === 'EREQUEST') {
            res.json(getCustomResponse(404, `Invalid object name`, ''))
        } else {
            res.json(getCustomResponse(500, 'Error interno del servidor', ''))
        }
    }
}