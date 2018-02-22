const path = require('path');

exports.test = function(req, res, next) {
    var data = {"title":"test","content":'Hello World',code:1000};
    if(data.code == 1000){
        res.success(data);
    }else{
        res.failure(data.code,'请求失败');
    }
};



exports = module.exports;