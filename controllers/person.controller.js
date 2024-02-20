import sql from 'mssql';

export async function listarPersonas(req, res){
    const request = new sql.Request();
    const result = await request.query("ProcPersona '',10");
    if (result){
        res.status(200).json(result.recordset);
    }else{
        res.status(400).send()
    }
}

export async function listarPersona(req, res){
    const request = new sql.Request();
    const CodPersona = req.params.CodPersona;
    const result = await request.query(`ProcTaller '${CodPersona}',11`);
    if (result){
        res.status(200).json(result.recordset);
    }else{
        res.status(400).send()
    }
}