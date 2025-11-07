import express from "express";
const app = express();

app.get('/api/user', (req, res) => {
    res.send("Hi");
});

const PORT = 5173;
app.listen(PORT, () => {
    console.log(`Port is listening at port ${PORT}`);
});
