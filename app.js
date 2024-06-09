const expreess = require("express");
const os = require("os");
const app = expreess();

app.get("/", (request, response) => {
    return response
    .status(200)
    .json({
        message: "Hello World"
    });
});

app.get("liveness", (request, response) => {
    return response
    .status(200)
    .json({
        message: "Meu App está Vivo",
        path: process.cwd(),
        gid: process.getgid(),
        uid: process.getuid(),
        date: new Date().getTime(),
    });
});

app.get("/readiness", (request, response) => {
    return response
    .status(200)
    .json({
        message: "Meu App esta pronto",
        platform: os.platform(),
        freemem: os.freemem(),
        homedir: os.homedir(),
        date: new Date().getTime(),
    });
});




module.exports = app;