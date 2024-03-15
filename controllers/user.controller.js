import { execGeneral } from '../layouts/execGeneral.js'

export async function listaUsuarios(req, res){
    res.json(await execGeneral('ProcUsuario','',10))
}

export async function listaUsuario(req, res){
    res.json(await execGeneral('ProcUsuario','',11))
}