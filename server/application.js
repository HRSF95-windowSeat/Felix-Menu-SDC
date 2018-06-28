const express = require('express');
const path = require('path');
const db = require('../database/index');
const cassDB = require('../database/cassandra\ index')
const router = express.Router();

const app = express();

app.use('/restaurant/:restaurantId', express.static(path.join(__dirname, '../public/index.html')));
app.use('/menusBundle.js', express.static(path.join(__dirname, '../public/dist/bundle.js')));

// app.get('/menus/restaurant/:restaurantId/menu', (req, res) => {
//   db.retrieve(req.params.restaurantId, (err, result) => {
//     if (err && err.message.includes('Cast to number failed for value "NaN"')) {
//       res.status(400).json('Bad request');
//     } else if (err) {
//       res.status(500).json('Unable to retrieve menu data from database');
//     } else {
//       res.status(200).json(result);
//     }
//   });
// });
var converter = (data) => {

  var breakfast = [
    {
      menu_section: "Starter",
      entries: [],
    }, 
    {
      menu_section: "Entree",
      entries: [],
    }, 
    {
      menu_section: "Dessert",
      entries: [],
    }];

  var lunch = [
    {
      menu_section: "Starter",
      entries: [],
    },
    {
      menu_section: "Entree",
      entries: [],
    },
    {
      menu_section: "Dessert",
      entries: [],
    }];;

  var dinner = [
    {
      menu_section: "Starter",
      entries: [],
    },
    {
      menu_section: "Entree",
      entries: [],
    },
    {
      menu_section: "Dessert",
      entries: [],
    }];
    
  data.forEach((elem) => {
    if (elem.meal_time === "Breakfast") {
      if (elem.meal_type === 'Starter') {
        breakfast[0].entries.push({
          name: elem.food_name,
          desc: 'union mescal, blackberry shrub, lime juice, bitter lemon',
          price: elem.food_price,
          photoUrl: elem.photo_url,
          filter_categories: {},
          meal_time: elem.meal_time
        })
      } else if (elem.meal_type === 'Entree') {
        breakfast[1].entries.push({
          name: elem.food_name,
          desc: "grilled fra'mani ham, gruyere cheese, béchamel, firebrand sour dough bread",
          price: elem.food_price,
          photoUrl: elem.photo_url,
          filter_categories: {},
          meal_time: elem.meal_time,
        })
      } else if (elem.meal_type === 'Dessert') {
        breakfast[2].entries.push({
          name: elem.food_name,
          desc: 'dungeness crab, bay shrimp or both; gem lettuce, asparagus, tomato, scallion, hard-cooked egg, olive, louis dressing',
          price: elem.food_price,
          photoUrl: elem.photo_url,
          filter_categories: {},
          meal_time: elem.meal_time,
        })
      }
    } else if (elem.meal_time === "Lunch") {
      if (elem.meal_type === 'Starter') {
        lunch[0].entries.push({
          name: elem.food_name,
          desc: "gem lettuce, tomato, avocado, egg, smoky blue cheese, pickled red onion, crisp potato, red wine vinaigrette",
          price: elem.food_price,
          photoUrl: elem.photo_url,
          filter_categories: {},
          meal_time: elem.meal_time
        })
      } else if (elem.meal_type === 'Entree') {
        lunch[1].entries.push({
          name: elem.food_name,
          desc: 'gem lettuce, tuna confit, hard-cooked egg, haricot vert, tomato, pee-wee potato, black olive, red wine vinaigrette',
          price: elem.food_price,
          photoUrl: elem.photo_url,
          filter_categories: {},
          meal_time: elem.meal_time,
        })
      } else if (elem.meal_type === 'Dessert') {
        lunch[2].entries.push({
          name: elem.food_name,
          desc:
            "gruyere, butter lettuce, tomato, red onion, b&b pickles, mustard aioli, green salad",
          price: elem.food_price,
          photoUrl: elem.photo_url,
          filter_categories: {},
          meal_time: elem.meal_time
        });
      }
    } else if (elem.meal_time === "Dinner") {
      if (elem.meal_type === 'Starter') {
        dinner[0].entries.push({
          name: elem.food_name,
          desc:
            "wakame seaweed salad, pickled ginger, crispy soy paper",
          price: elem.food_price,
          photoUrl: elem.photo_url,
          filter_categories: {},
          meal_time: elem.meal_time
        });
      } else if (elem.meal_type === 'Entree') {
        dinner[1].entries.push({
          name: elem.food_name,
          desc:
            "chimichurri, lobster bouillabaisse, saffron aioli, sourdough crouton",
          price: elem.food_price,
          photoUrl: elem.photo_url,
          filter_categories: {},
          meal_time: elem.meal_time
        });
      } else if (elem.meal_type === 'Dessert') {
        dinner[2].entries.push({
          name: elem.food_name,
          desc:
            "chipotle, vegenaise, crispy onion, butter lettuce, tomato",
          price: elem.food_price,
          photoUrl: elem.photo_url,
          filter_categories: {},
          meal_time: elem.meal_time
        });
      }
    }
  })
  var convertResult = {
    rest_id: data[0].rest_id,
    rest_name: data[0].rest_name,
    breakfast: breakfast,
    lunch: lunch,
    dinner: dinner,
  }
  console.log(convertResult)
  return convertResult
}

app.get('/menus/restaurant/:restaurantId/menu/', (req, res) => {
  db.instruction(`SELECT * FROM menu INNER JOIN restaurant ON restaurant.rest_id = menu.rest_id WHERE menu.rest_id = ${req.params.restaurantId}`, (err, result) => {
    if (err) {
      res.status(500).json(err)
    } else {
      //console.log(result.rows)
      res.status(200).send(converter(result.rows))
    }
  })
})

app.get("/restaurant/:restaurantId/restaurant/", (req, res) => {
  db.instruction(
    `SELECT * FROM menu where id = ${req.params.restaurantId}`,
    (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result.rows);
      }
    }
  );
});

app.post('/restaurant/:restaurantId/menu/', (req, res) => {
  db.instruction("INSERT INTO restaurant (rest_id, rest_name, city_name, country_style, budget) VALUES (10000000, 'test name', 'Los Angeles', 'S American', 'Expensive')", (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(result.rows);
    }
  });
});

router.put('/restaurant/:restaurantId/menu/', (req, res) => {
  db.instruction(
    "UPDATE restaurant SET rest_name = 'test name edited' WHERE rest_name = 'test name'",
    (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result.rows);
      }
    }
  );
});

app.delete("/restaurant/:restaurantId/menu/", (req, res) => {
  db.instruction(`DELETE FROM restaurant where rest_id = ${req.params.restaurantId}`, (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(result.rows);
    }
  });
});

module.exports = app;
