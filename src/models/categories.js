const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mauhalo#2212",
    database: "testapi"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  let categoriaModel = {};

  categoriaModel.getCategoria = (callBack) =>{
    if(con){
        con.query(
            "SELECT * FROM Categoria",
            (err, rows) => {
                if(err){
                    throw err;
                }else{
                    callBack(null, rows);
                }
            }
        );
    }
};