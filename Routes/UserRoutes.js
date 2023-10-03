import express from "express";
import { QueryTypes } from "sequelize";
import User from "../Models/UserModels.js";

const router = express.Router();

router.post("/users", async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ msg: "Member ditambahkan" });
  } catch (error) {
    res.send(error.message);
  }
});

//create new api for read / select data from database

router.get("/users/:name", async (req, res) => {
  try {
    const result = await User.sequelize.query('SELECT * FROM users u WHERE u.name = ?',
    {
      replacements: [req.params.name],
      type: QueryTypes.SELECT
    }
    );
    res.status(201).json({ msg: "Member ditemukan", result: result });
  } catch (error) {
    res.send(error.message);
  }
});

//create new api for update data from database

router.put("/users/:name", async (req, res) => {
  try {
    const result = await User.sequelize.query('UPDATE users u SET u.email = ? WHERE name = ?',
    {
      replacements: [req.body.email, req.params.name],
      type: QueryTypes.UPDATE
    }
    );
    res.status(200).json({ msg: "Member berhasil diupdate!", result: result });
  } catch (error) {
    res.send(error.message);
  }
});

//create new api for delete data from database
router.delete("/users/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const fetchedData = await User.findOne({ where: { name: name }});
    await fetchedData.destroy({msg: 'Success Delete!'});
    res.status(200).json();
  } catch (error) {
    res.send(error.message);
  }
});

export default router;
