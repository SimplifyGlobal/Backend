import express from 'express';

const router = express.Router();

const sampleController = (req, res) => {
    res.send('Hello World');
};

export {
    sampleController
}