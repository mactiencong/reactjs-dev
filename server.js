var express = require("express");
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use("/statics",express.static('./statics'));
app.get("/", (res, resp)=>{
    resp.render("home");
});
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});