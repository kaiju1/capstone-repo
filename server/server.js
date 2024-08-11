const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// db connect
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {console.log('Connected to MongoDB');})
//     .catch((error) => {console.error('Error connecting to MongoDB:', error);
// });

// api
app.get('/', (req, res) => {
    res.send('api');
});

// initialize server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
