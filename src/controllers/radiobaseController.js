const controller = {};

controller.list = (req, res) =>{
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM  tabla', (err, radiobases) => {
            if (err) {
                res.json(err);
            }else{
                res.json(radiobases);
            }
        });
    });
};

//-----------------------------------------------------------------------------

controller.find = (req, res) =>{
    req.getConnection((err, conn)=>{
        req,params
        conn.query('SELECT * FROM tabla like', [data])
    })
}

module.exports = controller;

