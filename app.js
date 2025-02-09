const express = require('express');
const app = express(); // Create express application
const port = 9643;

// expose static files of ./dist on port 9643
app.use(express.static('dist'));

// Start the server
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
