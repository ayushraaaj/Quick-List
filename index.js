const port = 8000;
const express = require('express');
const path = require('path');

const db = require('./config/mongoose');
const List = require('./models/lists');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/', function(request, response){
    List.find({})
    .catch(function(error){
        console.log('Error in printing');
        return;
    })
    .then(function(lists){
        return response.render('home', {
            title: 'ToDo List',
            todoList: lists
        });
    });
});

app.post('/create_list', function(request, response){
    List.create(request.body)
    .catch(function(error){
        console.log('Error in creation');
        return;
    })
    .then(function(){
        return response.redirect('/');
    });
});

app.get('/delete_task', function(request, response){
    const id = request.value;
    console.log(id);

    // List.findByIdAndDelete(id)
    // .catch(function(error){
    //     console.log('Error in deleting');
    //     return;
    // })
    // .then(function(){
    //     return response.redirect('/');
    // });
});

app.listen(port, function(error){
    if(error){
        console.log(`Error: ${error}`);
        return;
    }

    console.log(`Server is running on Port: ${port}`);
});