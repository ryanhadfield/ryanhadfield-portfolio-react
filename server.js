const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path")


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/*", function (req, res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
  })
} 


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
