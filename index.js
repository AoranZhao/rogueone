let express = require('express');
let app = express();

let PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
    res.status(200).send('pong\n');
})

app.get('/hello', (req, res) => {
    res.status(200).send('hi\n');
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})