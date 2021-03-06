const collectRoutes = (app, fs) => {
    // variables
    const dataPath = "./public/collect.json";
  
    // READ
    app.get("/get_meta_data/finance/collect", (req, res) => {
      fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = collectRoutes;