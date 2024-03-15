import { execGeneral } from "../layouts/execGeneral.js";

export async function listarModulos(req, res){
    const requestQuery = req.query;
    res.json(await execGeneral('ProcModuloPenal', requestQuery , 11));
}

export async function guardarModulo(req, res){
    const requestBody = req.body;
    res.json(await execGeneral('ProcModuloPenal', requestBody, 20));
}

export async function editarModulo(req, res){
    const requestBody = req.body;
    res.json(await execGeneral('ProcModuloPenal', requestBody, 30));
}

export async function eliminarModulo(req, res){
    const requestBody = req.body;
    res.json(await execGeneral('ProcModuloPenal', requestBody, 40));
}