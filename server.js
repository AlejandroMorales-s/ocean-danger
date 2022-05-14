const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (res, req) => {
    response.json({message: "Ocean in Danger welcome!"});
});

app.listen(port, () => {
    console.log(`Ocean in Danger on port: ${port}`);
});