const pg = require("pg");

const client = new pg.Client({host: 'localhost', user: 'felixyun', database: "restaurant_menu"});
client.connect();

// const queryStmt =
//   "SELECT * FROM menu WHERE id = 1";

var instruction = (queryStmt, callback) => {
  client.query(queryStmt, (err, res) => {
    if (err) {
      console.log(err)
      callback(err, null)
    } else {
      //console.log(res)
      //res.status(200).end()
      callback(null, res)
    }
  });
}

module.exports.instruction = instruction;