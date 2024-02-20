import sql from 'mssql';

export async function listarTalleres(req, res){

    const request = new sql.Request();
    const result = await request.query("ProcTaller '',10");
    if (result){
        res.status(200).json(result.recordset);
    }else{
        res.status(400).send()
    }
}