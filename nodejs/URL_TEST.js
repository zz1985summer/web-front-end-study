let resolve=function (url){
    let obj={};
    obj.protocal=url.substring(0,url.indexOf(':'));
    obj.server=url.substring(url.indexOf('//'),url.lastIndexOf(':'));
    obj.port=(url.substring(url.lastIndexOf(':')+1)).substring(0,url.substring(url.lastIndexOf(':')+1).indexOf('/'));
    obj.path=url.substring(url.lastIndexOf(':')+(obj.port.length)+1,url.indexOf('?'));
    obj.querystring=url.substring(url.indexOf('?')+1);
    return obj;
};

module.exports.resolve=resolve;
