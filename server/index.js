const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const { networkInterfaces } = require('os');

app.listen(PORT, () => {
    console.log(`Backend Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
    const nets = networkInterfaces();
    const results = [];

    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
            if (net.family === 'IPv4' && !net.internal) {
                if (!results[name]) {
                    results[name] = [];
                }
                results.push(net.address);
            }
        }
    }
    res.json({ ip: results[0]});
});
