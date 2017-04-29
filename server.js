const http = require('http');
const PORT = process.env.PORT || 8000;

http.createServer().listen(PORT, () => console.log(`Server started at port ${PORT}...`));
