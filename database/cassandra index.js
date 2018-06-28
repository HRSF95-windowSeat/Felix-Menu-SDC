const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['localhost:9042'], keyspace: 'menu_service'});


const queryPOST = "insert into menu (a_rest_id, b_rest_name, c_meal_time, d_meal_type, e_food_name, f_food_description, g_price, h_photo_url, i_vegetarian, j_vegan, k_gluten_free) values(100000002, 'test', 'test meal time', 'test meal type', 'test meal name', 'test food desc', 10.00, 'url', '0', '0', '0')";

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

module.exports.instruction = retrieve;