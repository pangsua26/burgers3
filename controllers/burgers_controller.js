const express = require("express");

const router = express.Router();

//import model (burger.js) to use its databse functions
const burger = require("../models/burger.js");

// create routes and set up logic where required
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express cb res to all burger
  burger.all(function(burgerData) {
    // cb to return burger data and render data to index.handelbar
    res.render("index", { burger_data: burgerData });
  });
});

// post route to index.handleblar
router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    console.log(result);

    // redirect back to index.handlebar
    res.redirect("/");
  });
});

// put route to index.handlebar to update burger
router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    console.log(result);
    
    res.sendStatus(200);
  });
});
//delete route
// router.delete("/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
//     burger.delete(condition, function(result) {
//       if (result.affectedRows == 0) {
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });

// export routes for server.js to use.
module.exports = router;