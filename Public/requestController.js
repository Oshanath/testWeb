module.exports = function(app){

    app.get('/home', function(req, res){
        res.sendFile(__dirname + '/index.html');
    });

    app.get('/join', function(req, res){
        res.sendFile(__dirname + '/join.html');
    });

    app.post('/input', function(req, res){
        console.log(req.body);
        res.redirect('/join');
    });

    app.delete('/todo', function(req, res){

    });

}