const { response, request } = require("express");
const Bet = require("../models/bet");
const betsGet = (req = request, res = response) => {
  const { apikey } = req.query;
  res.json({
    msg: "get API - controlador",
    apikey,
  });
};
const betsPost = async (req, res = response) => {
  const body = req.body;
  const bet = new Bet(body);
  await bet.save();
  res.json({
    bet,
  });
};
const betsPut = async (req, res) => {
  const { id } = req.params;
  const { operation, ...resto } = req.body;
  const bet = await Bet.findByIdAndUpdate(id, resto);
  res.json({
    id,
    bet,
  });
};
// const betsDelete = (req, res) => {
//   res.json({
//     msg: "delete API - controlador",
//   });
// };
module.exports = {
  betsGet,
  betsPost,
  betsPut,
  // betsDelete,
};
