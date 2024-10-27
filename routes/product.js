const express = require('express');
const router = express.Router();

const calculateTotalValue = (products) => {
    return products.reduce((total, product) => {
        if (product.price && typeof product.price === 'number') {
            return total + product.price;
        }
        return total;
    }, 0);
};

router.post('/total', (req, res) => {
    const products = req.body;

    if (!Array.isArray(products) || products.length === 0) {
        return res.status(400).json({ error: 'Invalid input: must be a non-empty array of products.' });
    }

    const totalValue = calculateTotalValue(products);
    res.status(200).json({ totalValue });
});

module.exports = router; // Ensure this line is included
