const express = require('express');

var application = express();

application.engine('mustache', mustacheExpress());

application.get('/', (request, response) => {
    response.send('Hello World!');
});

application.listen(3000, () => {
    
});