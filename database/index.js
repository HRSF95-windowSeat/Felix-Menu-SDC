const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['localhost:9042'], keyspace: 'menu_service'});

const retrieve = (restaurantId, handleResponses) => {
  const query = "SELECT * FROM menu_service.menu where a_rest_id = ?";
  client.execute(query, [ `${restaurantId}` ], { prepare: true }, (err, result) => {
    if (err) {
      handleResponses(err, null);
    } else {
      handleResponses(null, result.rows[0]);
    }
  })
};

module.exports.retrieve = retrieve;