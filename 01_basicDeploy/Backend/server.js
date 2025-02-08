import express from 'express'

const app = express();

app.get('/' , (req, res) => {
    res.send('server is ready')
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "1st jokes",
            content: "this is the first joke"
        },
        {
            id: 2,
            title: "2nd jokes",
            content: "this is the second joke"
        },
        {
            id: 3,
            title: "3rd jokes",
            content: "this is the third joke"
        },
        {
            id: 4,
            title: "4th jokes",
            content: "this is the fourth joke"
        },
    ]

    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port} port`);
})

