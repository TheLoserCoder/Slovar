const express = require("express");
const bodyParser = require('body-parser');


const app = express();
 
app.use(bodyParser.json());

app.use(express.static(__dirname + "../../public"));

app.post('/login', (req, resp) => {

    if( req.body.login === "admin" && req.body.password === "admin" )
        resp.send( JSON.stringify(true));
    else resp.send( JSON.stringify(false));
})

 
app.listen(3000, () => console.log("Server is running...")
);


