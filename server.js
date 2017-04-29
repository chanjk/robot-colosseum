const http = require('http');
const PORT = process.env.PORT || 8000;
const app = require('./app');

http.createServer(app).listen(PORT, () => console.log(`Server started at port ${PORT}...`));
