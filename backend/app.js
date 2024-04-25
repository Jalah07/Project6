const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');


mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.9w0bb5b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas!');
    })
    .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas!');
        console.error(error);
    });
mongoose.plugin(mongodbErrorHandler);


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json())
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);

module.exports = app;