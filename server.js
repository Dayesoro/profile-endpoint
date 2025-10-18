require('dotenv').config();
const express = require('express')
const app = express()

const port = process.env.PORT || 3050;



const fetchRandomCatFact = async () => {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.fact;
    } catch (error) {
        console.error('Error fetching cat fact:', error);
        throw error;
    }
};

app.get('/me', async (req, res) => {
    try {
        const currentTime = new Date().toISOString(); 
        const catFact = await fetchRandomCatFact();

        res.setHeader('Content-Type', 'application/json');
        res.json({
            status: 'success',
            user: {
                email: 'dayesoro@gmail.com',
                name: 'Daniel Ayesoro',
                stack: 'Node.js/Express'
            },
            timestamp: currentTime,
            fact: catFact
        });
    } catch (error) {
        res.setHeader('Content-Type', 'application/json');
        res.json({
            error: error.message
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
