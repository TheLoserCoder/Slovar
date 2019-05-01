const express = require("express");
const bodyParser = require('body-parser');


const app = express();
 
app.use(bodyParser.json());
app.use(express.static(__dirname + "../../public"));

app.post('/login', (req) => {

    console.log(req.body)

})

 
app.listen(3000, () => console.log("Server is running...")
);


