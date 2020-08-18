const applyRoutes = (app, fs) => {
    // variables
    const dataPath = "./public/apply.json";
  
    // READ
    app.get("/get_meta_data/tradelicense/apply", (req, res) => {
      fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = applyRoutes;