const parse = require("pg-connection-string").parse;
const config = parse(
  "postgres://caewuvanaqgpqt:3efa58a4ef74833cc760b96507df349429d7b5642755fbb02e91884c80c0208f@ec2-54-91-223-99.compute-1.amazonaws.com:5432/dca4frai0ibhf7"
);
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
