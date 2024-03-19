const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerConfig = (app) => {
  const swaggerDocument = swaggerJSDoc({
    definition: {
      info: {
        title: "Divar Backend",
        description: "Divar Clone",
        version: 2.0,
      },
    },
    apis: ["./src/modules/*/*.swagger.js"],
  });

  const swagger = swaggerUi.setup(swaggerDocument);
  app.use("/", swaggerUi.serve, swagger);
};

module.exports = {
  swaggerConfig,
};
