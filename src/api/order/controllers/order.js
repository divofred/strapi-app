"use strict";
const stripe = require("stripe")("sk_test_randomStrings");
/**
 *  order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { address, amount, dishes, token, city, state } = ctx.request.body;

    try {
      // Charge the customer
      const charge = await stripe.charges.create({
        amount: amount * 100,
        currency: "usd",
        description: `Order ${new Date()} by ${ctx.state.user._id}`,
        source: token,
      });

      // Create the order
      const order = await strapi.service("api::order.order").create({
        data: {
          Amount: amount * 100,
          Address: address,
          Dishes: dishes,
          City: city,
          State: state,
        },
      });
      return order;
    } catch (err) {
      // return 500 error
      console.log("errorrr", err);
      ctx.response.status = 500;
      return {
        error: { message: "There was a problem creating the charge" },
        address,
        amount,
        dishes,
        token,
        city,
        state,
      };
    }
  },
}));
