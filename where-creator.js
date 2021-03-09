// @ts-check
const { Op } = require("sequelize");

/**
 * @typedef {object} Condition
 * @property {any} value - value
 * @property {symbol} operator - sequelize Op
 */

/**
 * @param {Object.<object, Condition>} conditions
 * @returns {object} generated where
 */
module.exports = function createWhereCondition(conditions) {
  let where = {};

  for (let [field, condition] of Object.entries(conditions)) {
    where[field] = {
      [condition.operator]: condition.value,
    };
  }

  return where;
};
