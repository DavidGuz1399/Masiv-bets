const { response,request } = require("express");
const betsGet = (req=request, res = response) => {
  const {apikey}=req.query;
  res.json({
    msg: "get API - controlador",
    apikey
  });
};
const betsPost = (req, res = response) => {
  const {nombre,edad} = req.body;
  res.json({
    msg: "post API - controlador",
    nombre,
    edad
  });
};
const betsPut = (req, res) => {
  const id= req.params.id;
  res.json({
    msg: `put API - ${id}`,
  });
};
const betsDelete = (req, res) => {
  res.json({
    msg: "delete API - controlador",
  });
};
module.exports = {
  betsGet,
  betsPost,
  betsPut,
  betsDelete,
};
