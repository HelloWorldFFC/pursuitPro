var uiOperat = require('./uiOperat.js');
var comm = require('../api/comm.js');
const getGoodsListTitleType = mss => {
	console.log(mss)
    let Type = '';
	switch(mss) 
	{
	     case '推荐':
	        Type='newProduct';
	        break;
	     case '推荐2':
	        Type='bestPopular';
	        break;
	     default:
	         Type='';
	} 
	return Type;
}


module.exports = {
 
}