// load up our shiny new route for users
const applyRoutes = require("./apply");
const collectRoutes = require("./collect");

const appRouter = (app, fs) => {
  // we've added in a default route here that handles empty routes
  // at the base API url
  app.get("/get_meta_data", (req, res) => {
    res.send("welcome to the development api-server");
  });

  // run our user route module here to complete the wire up
  applyRoutes(app, fs);
  collectRoutes(app,fs);
};

// this line is unchanged
module.exports = appRouter;