import sql from 'mssql';
import { getCustomResponse } from '../layouts/customResponse.js';


async function listarDatos(proc,param,Indice) {
    try {
        const request = new sql.Request();
        const result = await request.query(`${proc} '${param}',${Indice}`);
        if (result) {
            return getCustomResponse(200, '', result.recordset);
        } else {
            throw new Error(`No se encontraron datos en la tabla`);
        }
    } catch (error) {
        console.log("-->",error)
        if (error.code === 'EREQUEST') {
            return getCustomResponse(404, `Invalid object name`, '');
        } else {
            return getCustomResponse(500, 'Error interno del servidor', '');
        }
    }
}


export async function listarPersonas(req, res) {
    res.json(await listarDatos('ProcPersona','','10'));
}

export async function listarPersona(req, res) {
    var requestQuery = req.query;
    const parametros = Object.values(requestQuery).map(value => (value !== null ? value : '')).join('|');
    res.json(await listarDatos('ProcPersona', parametros ,'11'));
}

export async function guardarPersona(req, res) {
    const requestBody = req.body;
    const parametros = Object.values(requestBody).map(value => (value !== null ? value : '')).join('|');
    res.json(await listarDatos('ProcPersona',parametros,'0'));
}

export async function editarPersona(req, res) {
    const requestBody = req.body;
    const parametros = Object.values(requestBody).map(value => (value !== null ? value : '')).join('|');
    res.json(await listarDatos('ProcPersona',parametros,'30'));
}

export async function eliminarPersona(req, res) {
    const requestBody = req.body;
    const parametros = Object.values(requestBody).map(value => (value !== null ? value : '')).join('|');
    res.json(await listarDatos('ProcPersona',parametros,'40'));
}