const express = require('express')

const appRouter = require('./routes');
const { ServerConfig, Logger } = require('./config')

const app = express();

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`);
    Logger.info("Successfully started server");
})

app.use('/api', appRouter)
