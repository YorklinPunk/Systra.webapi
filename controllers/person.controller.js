import { execGeneral } from '../layouts/execGeneral.js'

export async function listarPersonas(req, res) {
    res.json(await execGeneral('ProcPersona','','10'));
}

export async function listarPersona(req, res) {
    const requestQuery = req.query;
    res.json(await execGeneral('ProcPersona', requestQuery ,'11'));
}

export async function guardarPersona(req, res) {
    const requestBody = req.body;
    res.json(await execGeneral('ProcPersona',requestBody,'20'));
}

export async function editarPersona(req, res) {
    const requestBody = req.body;
    res.json(await execGeneral('ProcPersona',requestBody,'30'));
}

export async function eliminarPersona(req, res) {
    const requestBody = req.body;
    res.json(await execGeneral('ProcPersona',requestBody,'40'));
}