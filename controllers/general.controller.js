import sql from 'mssql';
import { getCustomResponse } from '../layouts/customResponse.js';

async function listarDatos(params,tableName,Aux) {
  try {
    const request = new sql.Request();
    const result = await request.query(`SELECT ${params} FROM ${tableName} ${Aux}`);
    if (result) {
      return getCustomResponse(200, '', result.recordset);
    } else {
      throw new Error(`No se encontraron datos en la tabla ${tableName}`);
    }
  } catch (error) {
    if (error.code === 'EREQUEST') {
      return getCustomResponse(404, error.message, '');
    } else {
      return getCustomResponse(500, 'Error interno del servidor', '');
    }
  }
}

export async function listaEstadoCivil(req, res) {
  res.json(await listarDatos('*','TbEstadoCivil'));
}

export async function listaAreaLaboral(req, res) {
  res.json(await listarDatos('*','TbAreaLaboral'));
}

export async function listaFuncionLaboral(req, res) {
  res.json(await listarDatos('*','TbFuncionLaboral'));
}

export async function listaModalidadLaboral(req, res) {
  res.json(await listarDatos('*','TbModalidadLaboral'));
}

export async function listaNivelAcademico(req, res) {
  res.json(await listarDatos('*','TbNivelAcademico'));
}

export async function listaRegion(req, res) {
  res.json(await listarDatos('*','TbRegion'));
}

export async function listaSexo(req, res) {
  res.json(await listarDatos('*','TbSexo'));
}

export async function listaTipoDocumento(req, res) {
  res.json(await listarDatos('*','TbTipoDocumento'));
}

export async function listaPersonaTipo(req, res) {
  res.json(await listarDatos('*','TbPersonaTipo'));
}

export async function listUsuarioTipo(req, res) {
  res.json(await listarDatos('*','TbTipoUsuario'));
}

export async function listaDepartamentos(req, res) {
  res.json(await listarDatos('CodDepartamento, NomDepartamento ','TbDepartamento'));
}

export async function listaProvincias(req, res) {
  const requestQuery = req.query;
  const CodDepartamento = requestQuery.CodDepartamento;
  res.json(await listarDatos('CodProvincia, NomProvincia','TbProvincia','WHERE CodDepartamento = ' + CodDepartamento));
}

export async function listaDistritos(req, res) {
  const requestQuery = req.query;
  const CodProvincia = requestQuery.CodProvincia;
  res.json(await listarDatos('CodDistrito, NomDistrito','TbDistrito','WHERE CodProvincia = ' + CodProvincia));
}

export async function listaDelitoGenerico(req,res){
  res.json(await listarDatos('*','TbDelitoGenerico'));
}

export async function listaDelitoEspecifico(req,res){
  const requestQuery = req.query;
  const CodDelitoGenerico = requestQuery.CodDelitoGenerico;
  res.json(await listarDatos('CodDelitoEspecifico, NomDelitoEspecifico','TbDelitoEspecifico', 'WHERE CodDelitoGenerico =' + CodDelitoGenerico));
};
