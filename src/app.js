import express from 'express';

const app = express();

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

// import Routers
import sampleRoute from './routes/sample.routes.js'

// Health check endpoint
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Backend is running smoothly',
        timestamp: new Date().toISOString()
    });
});

// Routes
app.use('/api/v1/sample', sampleRoute)

export { app }