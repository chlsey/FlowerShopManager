const express = require('express');
const app = express();

const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models/");

const bouquetRouter = require("./routes/Bouquets");
app.use("/bouquets", bouquetRouter);

db.sequelize.sync().then(() => {
    app.listen(3002, () => {
        console.log("Server running on port 3002");
    });
});




