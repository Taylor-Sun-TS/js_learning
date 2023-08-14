import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('src/client/'));

app.post('/hello', async (req, res) => {
    const name = req.body?.name;

    res.send({ text: `Hello ${name}` });
});


export function startServer() {
    app.listen(8888, () => console.log('Listening on http://localhost:8888/'));
}