
var count = 0;
module.exports = function (req, res, next) {
	// if (req.method !== "GET" && req.method !== "HEAD")
	// 	next();
	// if (req.url !== '/') {
	// 	var route = req.url;
	// 	req.url = '/';
	// 	res.statusCode = 302;
	// 	res.setHeader('Location', req.url + '#' + route);
	// 	res.end();
	// }
	// else next();
	count++;
	console.log("======enter haha======");
	console.log('req.url', req.url);
	console.log('req.method', req.method);
	console.log('req.headers', req.headers);
	next();
	console.log('res.statusCode', res.statusCode);
	console.log('res.headers', res.headers);
	res.setHeader('X-Count-from-haha', count);
	res.setHeader('set-cookie', 'haha=' + count + 'path=/; HttpOnly')
	console.log("======leave haha======");
}
