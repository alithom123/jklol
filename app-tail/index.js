const express = require("express");
// Allow Cross-origin resource sharing
const cors = require("cors");

//We initialize our express app
const app = express();
app.use(cors());
//Looking for local port to host our web application
const port = process.env.PORT || 4000;
//Send data to the front-end
app.get("/", (req, res) => {
    res.send({ exampleMessage: "You're connected to the express server!" });
})
//Initialize our web-app on the selected oort
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);