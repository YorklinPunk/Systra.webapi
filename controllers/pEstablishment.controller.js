import { execGeneral } from "../layouts/execGeneral.js";

export async function listaGeneralEP(req, res){
    res.json(await execGeneral('ProcEstablecimientoPenal','',10))
}

export async function listaEP(req, res){
    const requestQuery = req.query;
    res.json(await execGeneral('ProcEstablecimientoPenal','',11))
}

export async function ComboGeneralEP(req, res){
    res.json(await execGeneral('ProcEstablecimientoPenal','',12))
}

export async function AsignarModulos(req, res){    
    const requestBody = req.body;
    res.json(await execGeneral('ProcEstablecimientoPenal','',31))
}