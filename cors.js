// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(express.json()); // for parsing application/json & urlencoded & form-data
// app.use(cors())
// app.get("/sum", function(req, res) {
//     console.log(req.name);
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json(
//         ans =  a + b
//     )
// });

// app.listen(3000);
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/sum", function(req, res) {
    console.log(req.name);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000, () => console.log("Server running on port 3000"));
