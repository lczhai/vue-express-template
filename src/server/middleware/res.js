module.exports = function( req, res, next ){
    res.json = function( data ){
        res.end( JSON.stringify( data ) );
    }

    res.success = function( data, pager ){
        res.json( {
            errCode: '',
            errMsg: '',
            result: data,
            pager: pager,
            success: true
        } );
    }

    res.failure = function( errCode, errMsg ){
        res.json( {
            errCode,
            errMsg,
            result: null,
            success: false
        } );
    }

    next();
}