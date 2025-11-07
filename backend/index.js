import express from "express";
const app = express();

const PORT = 5173;

app.listen(PORT, () => {
    console.log(`Port is listening at port ${PORT}`);
});
