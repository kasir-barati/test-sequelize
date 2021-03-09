// @ts-check
const { Op } = require("sequelize");

const whereCreator = require("./where-creator");

let where = whereCreator({
  name: {
    operator: Op.eq,
    value: "mohammad jawad",
  },
  age: {
    operator: Op.between,
    value: [10, 20],
  },
});

console.log(where);
