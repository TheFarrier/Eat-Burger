const express = require("express");
const burger = require("../models/burger.js"); //import burger from models

const router = express.Router();

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne([req.body.name], function (result) {
    res.redirect("/");
  });
});

router.post("/api/burgers/:id", function (req, res) {
  burger.updateOne(req.params.id,
    function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.redirect("/");

    }
  );
});

// Export routes for server.js to use.
module.exports = router;