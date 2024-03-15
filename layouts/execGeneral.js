import sql from 'mssql';
import { getCustomResponse } from './customResponse.js';

export async function execGeneral(proc,param,Indice) {
    try {
        const parametros = ''
        if(param !== ''){
            parametros = Object.values(param).map(value => (value !== null ? value : '')).join('|');
        }
        const request = new sql.Request();
        const result = await request.query(`${proc} '${parametros}',${Indice}`);
        if (result) {
            return getCustomResponse(200, '', result.recordset);
        } else {
            throw new Error();
        }
    } catch (error) {
        if (error.code === 'EREQUEST') {
            return getCustomResponse(404, error.message, '');
        } else {
            return getCustomResponse(500, 'Error interno del servidor', '');
        }
    }
}