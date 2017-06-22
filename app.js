const express = require('express');
const data = require('./data.js');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

const application = express();

application.engine('mustache', mustacheExpress());
application.set('views', './views');
application.set('view engine', 'mustache');
    
application.use(bodyParser.urlencoded());

application.use(express.static('public'));

application.get('/', function(request, response){
    response.render('index', data);
});

application.get('/:id', function(request, response){
    var id = parseInt(request.params.id);
    var profile = data.users.filter(
        function(obj, index){
            if (obj.id === id) {
                return true;
            }
            else{
                return false;
            }
    });
    response.render('profile', profile[0]);
});

application.listen(3000, 'localhost');