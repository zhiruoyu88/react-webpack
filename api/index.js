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
    var data;
    if(req.query.type){
        if(req.query.type=='learn'){
            data = [
                {
                    title:'ajax已死，fetch才是未来！',
                    content:'瞎说'
                },
                {
                    title:'ajax已死，fetch才是未来！',
                    content:'瞎说'
                }
            ]
        }else if(req.query.type=='life') {
            data = [
                {
                    title:'西藏骑行',
                    content:'瞎说'
                },
                {
                    title:'ajax已死，fetch才是未来！',
                    content:'瞎说'
                }
            ]
        }else{
            res.send('404\n 没有该分类')
        }
    }else {

    }
    console.log(req.query)    
    res.send(data);
})
app.listen(3000,function(){
    console.log('listen on port 3000')
})