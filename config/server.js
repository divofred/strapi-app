module.exports = ({ env }) => ({
  url: env("https://strapi-food-ordering-app.herokuapp.com/"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});
