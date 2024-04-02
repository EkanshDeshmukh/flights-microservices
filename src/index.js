const express = require('express');
const app = express();

require('dotenv').config();
const PORT = 3000;


app.listen(PORT,()=>{console.log(`Server is running on the PORT:${PORT}`)});