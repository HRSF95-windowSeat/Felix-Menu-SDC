const pg = require("pg");

const client = new pg.Client({
  host: "172.18.0.2/16",
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB
});
client.connect();
console.log('this is host ----------->', client.host)
var instruction = (queryStmt, callback) => {
  client.query(queryStmt, (err, res) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, res)
    }
  });
}

module.exports.instruction = instruction;