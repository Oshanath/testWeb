module.exports = function(app){

    app.get('/home', function(req, res){
        res.sendFile(__dirname + '/index.html');
    });

    app.post('/todo', function(req, res){

    });

    app.delete('/todo', function(req, res){

    });

}