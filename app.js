const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/product');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    console.log("Root route accessed.");
    res.send('API is running!');
});

app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
