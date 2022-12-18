const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

function authenticate_user(req, res, next) {
    console.log("CHECKING CREDENTIALS");
    let creds = req.get('Authorization');
    creds = creds.substr(creds.indexOf(' ') + 1);
    creds = Buffer.from(creds, 'base64').toString('binary');

    creds = creds.split(':');

    /* Faux Database check of credentials */
    if (creds[0] === 't@yeah.com' && creds[1] === '123') {
        next();
    } else {
        res.status(401).end();
    }
}

app.get('/login', authenticate_user, (req, res) => {
    res.status(200).end();
});

app.get('/logout', authenticate_user, (req, res) => {
    res.status(200).end();
});

app.use((req, res, next) => {
    res.status(404).send('Route not found.');
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message || "Problem.");
});

const server = app.listen(PORT, function() {
    console.log(`Server is up and running on port ${server.address().port}`);
});
