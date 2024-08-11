const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const PORT = 3000;
const apiRoutes = require('./routes/index')
const connect = require('./config/database.js')
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
};
const cookieParser = require('cookie-parser');

// Apply CORS middleware
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser());
app.use('/api', apiRoutes);

const serverSetupandStart = async () => {
    app.listen(PORT, async () => {
        console.log(`server started on port ${PORT}`);

        connect()
            .then(() => {
                console.log("MongoDB is connected successfully");
            })
            .catch((err) => {
                console.log(err);
            });
    });
};

serverSetupandStart();