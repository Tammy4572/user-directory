const express = require('express');
const data = require('./data.js');
const mustacheExpress = require('mustache-express');

const application = express();

application.engine('mustache', mustacheExpress());
application.set('views', './views');
application.set('view engine', 'mustache');

application.use('/public', express.static('./public'));
application.get('/', function(request, response){
    response.render('index', data);
});

application.get('/:id', (request, response) => {
    let id = parseInt(required.params.id);
    let user = data.users.filter(function(obj, index){
        if(obj.id === id){
            return true;
        }
        else{
            return false;
        }
    })
    response.render('user', user[0]);
});


application.listen(3000, 'localhost');