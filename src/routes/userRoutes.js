const usuarioC = require('../models/user');

module.exports = function (app){

    app.get('/users', (req, res) =>{
        usuarioC.getUsers((err, data) => {
            res.json(data);
        });
    });

    app.post('/users', (req, res) => {
        const userData = {
            id:null, 
            username: req.body.username,
            pass: req.body.pass,
            email: req.body.email
        };

        usuarioC.insertUser(userData, (err, data) => {
            if(data && data.insertId){
                res.json({
                    succes: true,
                    msg: 'Usuario Insertado',
                    data: data
                });
            }else{
                res.status(500).json({
                    success:false,
                    msg:'Error'
                });
            }
        });

    });

    app.put('/users/:id', (req, res) => {

        const userData = {
            id:req.params.id, 
            username: req.body.username,
            pass: req.body.pass,
            email: req.body.email
        };

        usuarioC.updateUsers(userData, (err, data) => {
            if(data){
                res.json(data);
            }else{
                res.status(500).json({
                    success:false,
                    msg:'Error'
                });
            }
        });
    });

    app.delete('/users/:id', (req, res) => {
        const userData = {
            id:req.params.id, 
        };

        usuarioC.deleteUser(userData, (err, data) => {
            if(data){
                res.json(data);
            }else{
                res.status(500).json({
                    success:false,
                    msg:'Error'
                });
            }
        });
    });
}
