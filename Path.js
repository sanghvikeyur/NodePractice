var path=require('path');
var url=require('url');
var querystring=require('querystring');

var adr='http://localhost:8080/default.htm?year=2020&month=february&date=20';
var q= url.parse(adr,true);
var qry=path.basename(adr);

console.log('Host is :'+q.host);
console.log('Host Name is :'+q.hostname);
console.log('Path Name is :'+q.pathname);
console.log('Search is :'+q.search);
console.log('Host is :'+q.host);
console.log('Extension is : '+path.extname(qry));
console.log('Directory is : '+path.dirname(adr));
console.log('Is Absolute : '+path.isAbsolute(qry));

var qdata= q.query;
console.log('qdata month : '+qdata.month);

console.log('Querystring : '+querystring.stringify({ company: 'microsoft', prod: ['windows', 'msoffice'], since: '' }));
console.log('Querystring Unescape : '+querystring.unescape(q.search));