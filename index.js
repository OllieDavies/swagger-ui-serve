const express = require("express");
const swaggerUi = require("swagger-ui-express");
const open = require("open");
const argv = require("minimist")(process.argv.slice(2));

const port = argv.port || 3000;
const app = express();

app.use('/', swaggerUi.serve, swaggerUi.setup(require(argv.spec)));
app.listen(port, function(){
    console.info(`Swagger listening at http://localhost:${port}`);
    open(`http://localhost:${port}`);
});