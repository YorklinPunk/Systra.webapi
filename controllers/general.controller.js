import sql from 'mssql';
import { getCustomResponse } from '../layouts/customResponse.js';

async function listarDatos(tableName) {
  try {
    const request = new sql.Request();
    const result = await request.query(`SELECT * FROM ${tableName}`);
    if (result) {
      return getCustomResponse(200, '', result.recordset);
    } else {
      throw new Error(`No se encontraron datos en la tabla ${tableName}`);
    }
  } catch (error) {
    if (error.code === 'EREQUEST') {
      return getCustomResponse(404, `Invalid object name ${tableName}`, '');
    } else {
      return getCustomResponse(500, 'Error interno del servidor', '');
    }
  }
}

export async function listaEstadoCivil(req, res) {
  res.json(await listarDatos('TbEstadoCivil'));
}

export async function listaAreaLaboral(req, res) {
  res.json(await listarDatos('TbAreaLaboral'));
}

export async function listaFuncionLaboral(req, res) {
  res.json(await listarDatos('TbFuncionLaboral'));
}

export async function listaModalidadLaboral(req, res) {
    res.json(await listarDatos('TbModalidadLaboral'));
}

export async function listaNivelAcademico(req, res) {
    res.json(await listarDatos('TbNivelAcademico'));
}

export async function listaRegion(req, res) {
    res.json(await listarDatos('TbRegion'));
}

export async function listaSexo(req, res) {
    res.json(await listarDatos('TbSexo'));
}

export async function listaTipoDocumento(req, res) {
    res.json(await listarDatos('TbTipoDocumento'));
}

export async function listaPersonaTipo(req, res) {
    res.json(await listarDatos('TbPersonaTipo'));
}

export async function listUsuarioTipo(req, res) {
    res.json(await listarDatos('TbTipoUsuario'));
}