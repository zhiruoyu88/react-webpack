var express = require('express');

var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.get('/api/articles',function(req,res){
    var data = [
        {
            title:'ajax已死，fetch才是未来！',
            content:'瞎说'
        },
        {
            title:'ajax已死，fetch才是未来！',
            content:'瞎说'
        }
    ]
    res.send(data);
})
app.listen(3000)