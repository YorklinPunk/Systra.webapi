import { execGeneral } from '../layouts/execGeneral.js'

export async function listaPabellon(req, res){
    const requestQuery = req.query;
    res.json(await execGeneral('ProcPabellon', requestQuery ,10));
}

export async function listaComboPabellon(req, res){
    const requestQuery = req.query;
    res.json(await execGeneral('ProcPabellon', requestQuery ,11));
}

export async function guardarPabellon(req, res) {
    const requestBody = req.body;
    res.json(await execGeneral('ProcPabellon',requestBody,20));
}

export async function editarPabellon(req, res) {
    const requestBody = req.body;
    res.json(await execGeneral('ProcPabellon',requestBody,30));
}

export async function eliminarPabellon(req, res) {
    const requestBody = req.body;
    res.json(await execGeneral('ProcPabellon',requestBody,40));
}

export async function listaPisosPabellon(req, res){
    const requestQuery = req.query;
    res.json(await execGeneral('ProcPabellonPiso',requestQuery,10))
}