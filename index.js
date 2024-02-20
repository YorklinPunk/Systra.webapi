import express from 'express'
import router from './routes/index.js'
import swaggerDocs from './swagger.js'
import sql from 'mssql';

const app = express()
const port = 4000

//----
const config = { ///module. export
  // user: 'userWeb',
  user: 'ylazaro',
  password: '123',
  server: '192.168.1.122',  // o la dirección de tu servidor SQL Server
  database: 'Systra',
  options: {
      encrypt: false,  // Si estás utilizando una conexión encriptada, establece esto en true
      port: 1433
  },
};

sql.connect(config)
    .then(() => console.log("conexion exitosa"))
    .catch(err => console.log("error en la conexion -> ",err))
//----

app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  swaggerDocs(app, port)
})
