const connection = require("../db/config");

module.exports = {
    getAllUsers:(req, res)=>{
        connection.query("SELECT * FROM episodes", (err, results)=>{
            if(err) {
            res.status(500).send("Error retrieving users");
            }
            else
            {
                res.json(results);
            }
        });
    },
    deleteUser:(req, res)=>{
        const id = req.params.id;
        connection.query("DELETE FROM episodes WHERE id = ?",[id], (err, results)=>{
            if(err) {
            res.status(500).send("Error deleting user");
            } else {
                res.status(200).send("User deleted");
            }
        });
    }
}
