var request = require('request');

request('http://webbred2.utb.hb.se/~dgu/rest_api/product/read_paging.php', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log("test1")
});

module.exports = read;