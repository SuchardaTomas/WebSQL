const db = require("../helpers/db");

exports.getAllBooks = (req, res) => {
  db.query("SELECT * FROM books;", (err, result, fields) => {
    if (err) return console.log(err);
    res.status(200).send({
      msg: "Books found",
      result,
    });
  });
};

exports.getBookById = (req, res) => {
  db.query(
    "SELECT * FROM books WHERE id = ?;",
    [req.params.id],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Book found",
        result,
      });
    }
  );
};




