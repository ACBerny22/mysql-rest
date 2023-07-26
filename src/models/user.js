const mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "contra",
    database: "nombredelabase"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

let userModel = {};

userModel.getUsers = (callBack) =>{
    if(con){
        con.query(
            "SELECT * FROM Usuario",
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

userModel.insertUser = (userData, callBack) => {
    if(con){
        con.query('INSERT INTO Usuario SET ?', userData,
        (err, result) => {
            if(err){
                throw err;
            }else{
                callBack(null, {
                    'insertId' : result.insertId
                });
            }
        }
        );
    }
};

userModel.updateUsers = (userData, callBack) => {
    if(con){

        const sql = `
        UPDATE Usuario SET
        username = ${con.escape(userData.username)},
        pass = ${con.escape(userData.pass)},
        email = ${con.escape(userData.email)}
        WHERE id = ${con.escape(userData.id)}
        `;

        con.query(sql,
        (err, result) => {
            if(err){
                throw err;
            }else{
                callBack(null, {
                    'msg' : "Update Successfull"
                });
            }
        }
        );
    }
};

userModel.deleteUser = (userData, callBack) => {
    if(con){

        const sql = `
        DELETE FROM Usuario WHERE id = ${con.escape(userData.id)}`;

        con.query(sql,
        (err, result) => {
            if(err){
                throw err;
            }else{
                callBack(null, {
                    'msg' : "Delete Successfull"
                });
            }
        }
        );
    }
};



module.exports = userModel;