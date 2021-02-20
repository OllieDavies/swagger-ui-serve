#!/usr/bin/env node

const express = require("express");
const swaggerUi = require("swagger-ui-express");
const open = require("open");
const commandLineArgs = require('command-line-args')

const optionDefinitions = [
    { name: 'port', alias: 'p', type: Number },
    { name: 'specification', alias: "s", type: String, defaultOption: true }
]

const options = commandLineArgs(optionDefinitions)

const port = options.port || 3000;
const app = express();

app.use('/', swaggerUi.serve, swaggerUi.setup(require(`${process.cwd()}/${options.specification}`)));
app.listen(port, function () {
    console.info(`Swagger listening at http://localhost:${port}`);
    open(`http://localhost:${port}`);
});