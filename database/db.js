const pgp = require("pg-promise")();
const { pghost, pgdb, pgport, pguser, pgpassword } = require("../config");

const connection = `postgres://${pguser}:${pgpassword}@${pghost}:${pgport}/${pgdb}`

const db = pgp(connection);

module.exports = db;