const express = require('express');
const colors = require('colors');
const { graphqlHTTP } = require('express-graphql')
require('dotenv').config();
const port = process.env.port || 5000;
const schema = require('./schema/schema');
const connectDB = require('./config/db');

const app = express();

//Database Connection
connectDB();

app.use(
    '/graphql', 
    graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === 'development',
    })
);

app.listen(port, console.log(`Server running on port ${port}`));