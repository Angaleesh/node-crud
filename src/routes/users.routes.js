const express = require("express");
const Connection = require("./../../config/db");
const router = express.Router();
const mysql = require("mysql");

router.post("/create", (req, res, next) => {
  let user = req.body;
  qry = "insert into node_users(first_name,last_name,city) values(?,?,?)";
  Connection.query(
    qry,
    [user.first_name, user.last_name, user.city],
    (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json({ message: "Data added successfully" });
      }
    }
  );
});

router.get("/show", (req, res, next) => {
  try {
    qry = "select * from node_users";
    Connection.query(qry, (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
      }
    });
  } catch (error) {
    console.log("error", error);
  }
});

router.get("/show/:id", (req, res, next) => {
  try {
    var { id } = req.params;
    qry = "select * from node_users where uid=?";
    Connection.query(qry,[id], (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
      }
    });
  } catch (error) {
    console.log("error", error);
  }
});

router.patch("/update/:id", (req, res, next) => {
  id = req.params.id;
  user = req.body;
  qry = "update node_users set first_name=? ,last_name=?,city=? where uid=?";
  Connection.query(
    qry,
    [user.first_name, user.last_name, user.city, id],
    (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json({ message: "Data Updated Successfully" });
      }
    }
  );
});

router.delete("/delete/:id", (req, res, next) => {
  id = req.params.id;
  qry = "delete from node_users where uid=?";
  Connection.query(qry, [id], (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json({ message: "Data Deleted Successfully" });
    }
  });
});

module.exports = router;
