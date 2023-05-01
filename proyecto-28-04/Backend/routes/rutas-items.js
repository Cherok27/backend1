const Items = require("../models/modelsi");
const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/chek-auth");

router.get("/", async (req, res, next) => {
  let productos;
  try {
    productos = await Items.find({});
  } catch (error) {
    console.log(error);
    const err = new err("ha ocurrido un error en la recuperacion de los datos");
    err.code = 500;
    return next(err);
  }
  res.status(200).json({
    mensaje: "Todos los items",
    productos: productos,
  });
});
router.post("/", async (req, res, next) => {
  const { nombre, precio, marca, tipo, cantidad } = req.body;

  const nuevoDocente = new Items({
    nombre,
    precio,
    cantidad,
    marca,
    tipo,
    carritos: [],
  });
  try {
    await nuevoDocente.save();
  } catch (error) {
    console.log(error);
    const err = new Error("No se han podido guardar los datos");
    err.code = 500;
    return next(err);
  }

  res.status(201).json({
    Items: nuevoDocente,
  });
});
router.use(checkAuth);
module.exports = router;
